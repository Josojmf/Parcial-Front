import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
const Nav: FunctionComponent = () => {
    return (
        <div>
        <div className="UpperPanel">
            <div className="ServerSidePanel">
            <a className="Links" href="/ServerSide">
                Server Side
            </a>
            </div>
            <div className="ClientSidePanel">
            <a className="Links" href="ClientSide">
                Client Side
            </a>
            </div>
        </div>
        </div>
    );
}
export default Nav;