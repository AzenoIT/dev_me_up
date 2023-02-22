import {roboto300, roboto500} from "@/app/fonts";
import "../../styles/scss/helpers/buttons.scss";
import "../../styles/scss/components/end.scss";


function EndSection(props) {
    return (
        <div className="container_end">
            <h2 className={`${roboto500.className} hdl_end`}>Zabawa i&nbsp;nauka w jednym</h2>
            <p className={`${roboto300.className} text_end`}>Sprawdź swoją wiedzę rywalizując ze znajomymi.</p>

            <div className='buttons_end'>
                <a href="" className={`${roboto500.className} btn_newsletter_add btn_download`}>Pobierz aplikację</a>
                <a href="" className={`${roboto500.className} btn_newsletter_add`}>Newsletter</a>
            </div>
        </div>
    );
}

export default EndSection;