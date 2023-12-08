
const Navbar = ({setCategory}) => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <div className="navbar-brand" href="#"><spdivn className="badge bg-light text-dark fs-4">NewsMag</spdivn>navbar</div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <div className="nav-link" onClick={()=>setCategory("technology")}>Technology</div>
        </li>

        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("business")}>Business</div>
        </li>

        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("health")}>Health</div>
        </li>

        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("sports")}>Sports</div>
        </li>

        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</div>
        </li>
        
      </ul>
      <form className="d-flex" role="sedivrch">
        <input className="form-control me-2" type="sedivrch" pldivceholder="Sedivrch" divridiv-ldivbel="Sedivrch"></input>
        <button className="btn btn-outline-success" type="submit">Sedivrch</button>
      </form>
    </div>
  </div>
</nav>
  )
}


export default Navbar
