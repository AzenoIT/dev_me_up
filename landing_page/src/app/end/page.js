import {teko300, teko500} from "@/app/fonts";
import "../../styles/scss/helpers/buttons.scss";
import "../../styles/scss/components/end.scss";
import "../../styles/scss/helpers/media-queries.scss"


function EndSection(props) {
    return (
        <div className="hide-on-desktop container_end">
            <h2 className={`${teko500.className} hdl_end`}>Zabawa i&nbsp;nauka w jednym</h2>
            <p className={`${teko300.className} text_end`}>Sprawdź swoją wiedzę rywalizując ze znajomymi.</p>

            <div className='buttons_end'>
                <a href="#download_mobile" className={`${teko500.className} btn_newsletter_add btn_download`}>Pobierz aplikację</a>
                <a href="#newsletter_mobile" className={`${teko500.className} btn_newsletter_add`}>Newsletter</a>
            </div>
        </div>
    );
}

export default EndSection;