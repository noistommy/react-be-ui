import BeTreeNode from './BeTreeNode'

interface treeNode {
  label: string,
  children?: treeNode[]
}

const BeTree = ({
  children,
  treeList = [],
  userClass = '',
  useCheck = false,
  useMark = false
}: {
  children?: React.ReactNode;
  treeList: treeNode;
  userClass?: string;
  useCheck?: boolean;
  useMark?: boolean;
}): JSX.Element => {
  return (
    <div className={`be-tree-list ${userClass}`}>
      {children || (
        <>
          {treeList.map((node, i) => (
            <BeTreeNode 
              key={`level-${i + 1}`}
              node={node}
              level={1}
              useCheck={useCheck}
              useMark={useMark}
              check={false}
            />
          ))}
        </>
      )}
    </div>
  )
}

export default BeTree
