import {parseOptions} from './tooltip-utill'

export class Tooltip {
  #defaultOption = {
     content: '',
     pos: 'top-center',
     theme: 'dark',
     invert: true,
     show: false,
     trigger: 'hover',
     selector: 'fr-tooltip',
  };
  constructor(root, options = {}) {
    this.root = root
    this.options = {...this.#defaultOption, ...options}
    this._show = this.options.show
    this.tooltip = null
    this.currenPos = null
    this.touchTimer = null
    this.longTouch = false
    this.#createEvents()
  }

  #createEvents () {
    if (this.options.trigger === 'hover') {
      this.root.addEventListener('mouseenter', this.setShow)
      this.root.addEventListener('mouseleave', this.setClose)

    } else {
      this.root.addEventListener('click', this.setToggle)
    }
  }
  update(options) {
    this.options = {...this.options, ...options}
    if (this._show) {
      this.setAttribute()
      this.setPosition()
    }
  }
  destroy () {
    this.setClose()
    if (this.options.trigger === 'hover') {
      this.root.removeEventListener('mouseenter', this.setShow)
      this.root.removeEventListener('mouseleave', this.setClose)

    } else {
      this.root.removeEventListener('click', this.setToggle)
    }
  }
  setShow = () => {
    if(this._show) return
    this._show = true
    this.setTooltip()
  }
  setClose = () => {
    this._show = false
    if (this.tooltip) {
      this.tooltip.classList.remove('show')
      this.tooltip.remove()
      this.tooltip = null
    }
    window.removeEventListener('scroll', this.setPosition, true)
    window.removeEventListener('resize', this.setPosition)
  }
  setToggle = () => {
    if (this._show) {
      this.setClose()
    } else {
      this.setShow()
    }
  }
  setTooltip () {
    if (this.tooltip && this._show) this.setClose()

    this.tooltip = document.createElement('div');
    this.setAttribute()
    document.body.append(this.tooltip)
    this.setPosition()

    window.addEventListener('scroll', this.setPosition, true)
    window.addEventListener('resize', this.setPosition)
    requestAnimationFrame(() => {
      this.tooltip.classList.add('show')
    });
  }

  setAttribute () {
    this.tooltip.innerHTML = this.options.content ?
    this.options.content :
    this.root.querySelector('[fr-target]').innerHTML
    this.tooltip.classList.add(...[
      this.options.selector,
      this.options.invert && 'invert',
      // `theme-${this.options.theme}`,
    ]);
  }

  setPosition = () => {
    if(!this._show) return
    const W = window.innerWidth;
    const H = window.innerHeight;
    let [dir, align] = this.options.pos.split('-') || ['top', 'center'];

    const rootPos = this.root.getBoundingClientRect();
    const ttPos = this.tooltip.getBoundingClientRect();
    const offset = 10
    const alignOffset = 0

    let tPos = rootPos.top - ttPos.height - offset
    let bPos = rootPos.bottom + offset

    let lPos = rootPos.left - (ttPos.width + offset)
    let rPos = rootPos.right + offset

    if (dir === 'top' && tPos < 0) dir = 'bottom'
    if (dir === 'bottom' && H - (bPos + ttPos.height) < 0) dir = 'top'

    if (dir === 'left' && lPos < 0) dir = 'right'
    if (dir === 'right' && W - (rPos + ttPos.width) < 0) dir = 'left'

    if (dir === 'top' || dir === 'bottom') {
      this.tooltip.style.top = dir === 'top' ? tPos + 'px' : bPos + 'px'
      const cPos = rootPos.left + rootPos.width / 2 - ttPos.width / 2
      const endPos = rootPos.right - ttPos.width
      if (rootPos.width >= ttPos.width ) {
        align = 'center'
      } else {
        if (align === 'center' && cPos < 0) {
          align = 'start'
        }
        if (W - rootPos.right - (ttPos.width / 2 - rootPos.width / 2) < 0) {
          align = 'end'
        }
      }
        this.tooltip.style.left = align === 'center' ? cPos + 'px' : align === 'end' ? alignOffset + endPos + 'px' : alignOffset + rootPos.left + 'px'
    } else {
      this.tooltip.style.left = dir === 'left' ? `${lPos}px` : `${rPos}px`
      const cPos = rootPos.top + rootPos.height / 2 - ttPos.height / 2
      const endPos = rootPos.bottom - ttPos.height
  
      if (rootPos.height >= ttPos.height) {
        align='center'
      } else {
        if (align === 'center' && cPos < 0) {
          align = 'start'
        }
        if (W - rootPos.right - (ttPos.width / 2 - rootPos.width / 2) < 0) {
          align = 'end'
        }
      }
      this.tooltip.style.top = align === 'center' ? cPos + 'px' : align === 'end' ? endPos + 'px' : rootPos.top + 'px'
    }
    this.tooltip.classList.remove(this.currenPos)
    this.currenPos = `${dir}-${align}`
    this.tooltip.classList.add(this.currenPos)

  }
  get show () {
    return this._show
  }
  set show (value = true) {
    this._show = value
  }

}

const activeInstances = new Map();

const SELECTOR_NAME = 'fr-tooltip';
let observer = null;

export function initTooltip() {
  clearTooltip();

  createTooltip(document.body)
  observeTarget()

  console.log(`${activeInstances.size}개의 툴팁 활성`)
}


function createTooltip(root) {
  if (root.nodeType !== 1) return;

  if (root.hasAttribute(SELECTOR_NAME)) {
    createInstance(root);
  }
  root.querySelectorAll(`[${SELECTOR_NAME}]`).forEach(createInstance);
}

function createInstance(el) {
  const options = parseOptions(el.getAttribute(SELECTOR_NAME));
  const instance = new Tooltip(el, options);
  activeInstances.set(el, instance);
}

function updateInstance(el) {
  const options = parseOptions(el.getAttribute(SELECTOR_NAME));
  const existing = activeInstances.get(el);

  if (!existing) {
    createInstance(el);
    return;
  }

  // Tooltip 쪽에 update 메서드가 있으면 그걸 쓰고, 없으면 destroy 후 재생성
  if (typeof existing.update === 'function') {
    existing.update(options);
  } else {
    existing.destroy?.();
    createInstance(el);
  }
}

function removeInstance(el) {
  const existing = activeInstances.get(el);
  if (existing) {
    existing.destroy?.();
    activeInstances.delete(el);
  }
}

function observeTarget() {
  observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      // 속성 변경
      if (mutation.type === 'attributes' && mutation.attributeName === SELECTOR_NAME) {
        const el = mutation.target;
        el.hasAttribute(SELECTOR_NAME) ? updateInstance(el) : removeInstance(el);
        continue;
      }

      // 노드 추가/삭제
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === 1) createTooltip(node);
        });
        mutation.removedNodes.forEach(node => {
          if (node.nodeType !== 1) return;
          removeInstance(node);
          node.querySelectorAll?.(`[${SELECTOR_NAME}]`).forEach(removeInstance);
        });
      }
    }
  });

  observer.observe(document.body, {
    attributes: true,
    attributeFilter: [SELECTOR_NAME],
    childList: true,
    subtree: true,
  });
}

export function clearTooltip() {
  activeInstances.forEach(instance => instance.destroy?.());
  activeInstances.clear();
  observer?.disconnect();
  observer = null;
}