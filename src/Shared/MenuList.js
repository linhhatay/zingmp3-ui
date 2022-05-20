import { RiFolderMusicLine, RiNeteaseCloudMusicLine } from "react-icons/ri";
import { FiDisc } from "react-icons/fi";
import { HiOutlineClipboardList } from "react-icons/hi";
import { CgDisc, CgMusic } from "react-icons/cg";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineStar, AiOutlineVideoCamera } from "react-icons/ai";

const MenuList = [
  [
    {
      id: 1,
      icon: <RiFolderMusicLine />,
      name: "Cá Nhân",
    },
    {
      id: 2,
      icon: <FiDisc />,
      name: "Khám Phá",
    },
    {
      id: 3,
      icon: <CgDisc />,
      name: "#zingchart",
    },
    {
      id: 4,
      icon: <RiNeteaseCloudMusicLine />,
      name: "Radio",
      figure: "https://zjs.zmdcdn.me/zmp3-desktop/dev/147506/static/media/live-tag.e25dd240.svg"
    },
    {
      id: 5,
      icon: <HiOutlineClipboardList />,
      name: "Theo dõi",
    },
  ],
  [
    {
      id: 1,
      icon: <CgMusic />,
      name: "Nhạc Mới",
    },
    {
      id: 2,
      icon: <BiCategoryAlt />,
      name: "Thể Loại",
    },
    {
      id: 3,
      icon: <AiOutlineStar />,
      name: "Top 100",
    },
    {
      id: 4,
      icon: <AiOutlineVideoCamera />,
      name: "MV",
    },
  ],
];

export default MenuList;
