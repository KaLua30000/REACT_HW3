export default function Footer() {
    return (
        <footer class="footer">
            <div class="footer__above py-5">
                <div class="container">
                    <div class="row my-3">
                        <h5 class="footer__description col-lg-8">
                            臺北市和平東路二段134號，國立臺北教育大學 數位科技設計學系
                        </h5>
                        <ul class="footer__list col-lg-4">
                            <li class="footer__item"><a href="" class="footer__link"><i class="fab fa-facebook-f"></i></a></li>
                            <li class="footer__item"><a href="" class="footer__link"><i class="fab fa-google-plus-g"></i></a></li>
                            <li class="footer__item"><a href="" class="footer__link"><i class="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="footer__below">
                <div class="container">
                    <h6>
                        &copy; Copyright All rights reserved.
                    </h6>
                </div>
            </div>
        </footer>
    );
}