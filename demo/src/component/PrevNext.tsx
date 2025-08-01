import { Link } from "react-router"

interface NavInfo {
  name: string;
  path: string;
}

export default function PrevNext ({
  prevInfo = null,
  nextInfo = null
}: {
  prevInfo: NavInfo;
  nextInfo: NavInfo;
}) {
  return (
    <div className="prev-next">
      <div className="prev">
        {prevInfo && (
          <Link to={prevInfo.path}>
            <div className="prev-btn be-button compact">
              <i className="icon left xi-angle-left" />
              {prevInfo.name}
            </div>
          </Link>
        )}
      </div>
      <div className="next">
        {nextInfo && (
          <Link to={nextInfo.path}>
            <div className="next-btn be-button compact">
              {nextInfo.name}
              <i className="icon right xi-angle-right" />
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}