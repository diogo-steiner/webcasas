import Link from "next/link";
import { BsHouseAdd } from "react-icons/bs";
import {
  HiOutlineClipboardDocumentList,
  HiOutlineSquares2X2,
} from "react-icons/hi2";
import { RxExit } from "react-icons/rx";
import MenuHamb from "@/components/MenuHamb";

interface IUserMenuMobile {
  handleLogout: () => void;
}

function UsermMenuMobile({ handleLogout }: IUserMenuMobile) {
  return (
    <MenuHamb>
      <nav className="text-sm text-gray2 ">
        <Link
          href="/my-register"
          className="py-3 px-4 hover:bg-gray7 flex items-center gap-3"
        >
          <HiOutlineClipboardDocumentList size={18} />
          Meu cadastro
        </Link>
        <Link
          href="/my-ads"
          className="py-3 px-4 hover:bg-gray7 flex items-center gap-3"
        >
          <HiOutlineSquares2X2 size={18} />
          Meus Anúncios
        </Link>
        <Link
          href="/form-property"
          className="py-3 px-4 hover:bg-gray7 flex items-center gap-3"
        >
          <BsHouseAdd size={18} />
          Anunciar
        </Link>

        <button
          type="button"
          className="py-3 px-4 w-full hover:bg-gray7 flex items-center gap-3"
          onClick={handleLogout}
        >
          <RxExit size={18} />
          Sair
        </button>
      </nav>
    </MenuHamb>
  );
}

export default UsermMenuMobile;
