class Navbar extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = 
        `
        <style>
        .larger-screen-nav-wrapper .navbar{
            position: fixed;
            width: 80%
        }
        .larger-screen-nav-wrapper ul li a{
            text-decoration: none;
            color: white
        }
        .larger-screen-nav-wrapper #menu-text{
            color: white;
            background: red;
            position: absolute;
            bottom: 0;
            transform: translateX(-50%);
            left: 50%
        }
        </style>
        
        <div class="larger-screen-nav-wrapper">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <!-- left secetion -->
                            <li class="nav-item"><a class="nav-link" href="#">Women</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Men</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Collection</a></li>
                        </ul>

                        <p id="menu-text">menu</p>

                        <!-- right secetion -->
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item"><a class="nav-link" href="#">Search</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Account</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Cart (3)</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        `;
    }
}

// registering the custom element
customElements.define('navbar-component', Navbar)