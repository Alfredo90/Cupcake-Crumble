import { Link } from "react-router-dom"


const SideBarList = ({item:{title, path, index}}) => {
  return (
    <>
    <ul className="flex flex-col mt-40 gap-20 text-white ">
        <li>
            <Link to={path}>{title}</Link>
        </li>
    </ul>
    </>
  )
}

export default SideBarList