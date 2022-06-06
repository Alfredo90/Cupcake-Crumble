import { Link } from "react-router-dom"


const SideBarList = ({item:{title, path, index}}) => {
  return (
    <>
    <ul className="  mt-40 gap-20  ">
        <li>
            <Link to={path}>{title}</Link>
        </li>
    </ul>
    </>
  )
}

export default SideBarList