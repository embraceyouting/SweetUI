import SweetButton from "./components/SweetButton";
import SweetInput from "./components/SweetInput"

// 用于全局注册
export default function install(app: import("vue").App) {
    app.component("SweetButton", SweetButton);
    app.component("SweetInput", SweetInput);
}

export { SweetButton, SweetInput }



