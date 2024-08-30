import '@/i18n'
import {Col} from "react-bootstrap";
import {ReactNode} from "react";
import {t} from "i18next";

export default function Footer() {
    return (
        <footer>
            <Col md={4} sm={6} xs={12}>
                <Contact/>
            </Col>
        </footer>
    )
}

function Contact(): ReactNode {
    return (
        <div>
            <h2>
                {t('contactTitle')}
            </h2>
        </div>
    )
}

