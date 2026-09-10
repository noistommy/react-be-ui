import BeLogo from '../component/BeLogo'
import FrogLogo from '../assets/img/frog-profile.svg'
import BeuiLogo from '../assets/img/be-ui-react.svg'

export default function HomeView () {
  return (
    <div id="intro" className="be flex center mid column">
      <h5 className="be-tag label round">Headless UI</h5>

      <h1 className="hero large"><BeLogo /></h1>
      <div className="large gray-txt-70 pt-4 pb-8">
        Unstyled UI components <br />designed to pair perfectly with Frog UI.
      </div>
      <div className="be-button primary outline bold mb-15">
        Show Components
        <i className="icon right xi-arrow-right" />
        <a className="link" href="/button" />
      </div>
      <div className="be flex mid center gap-4" fr-tooltip="content:Frog UI + BEUI-React">
        <img src={FrogLogo} alt="FrogLogo" />
        <i className="xi-plus-circle" />
        <img src={BeuiLogo} alt="BeuiLogo" />
      </div>
    </div>
  )
}