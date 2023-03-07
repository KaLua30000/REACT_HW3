export default function Header() {
    return (
        <header class="header">
            <div class="container d-flex flex-column align-items-center">
                <img class="header__avatar" src="./images/avatar.png" alt="avatar"></img>
                <h1 class="header__title">Name</h1>
                <hr class="divider--light"></hr>
                <p class="header__slogan">Slogan</p>
            </div>
        </header>
    );
}