import { Link } from 'react-router-dom';
const Navigation = ({ setLoggedIn }) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Property Management</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/PayRent">Pay Rent</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Request Maintenance</a>
                        </li>
                        <li class="nav-item">
                             <Link class="nav-link" to="/" onClick={() => setLoggedIn(false)}>Sign out</Link>
       
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navigation