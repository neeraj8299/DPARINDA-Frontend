import "../App.css";
import "../style.scss";

export default function Register() {
  return (
    <div class="d-md-flex half">
      <div
        class="bg"
        style={{ "background-image": "url('images/bg_1.jpg')" }}
      ></div>
      <div class="contents">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-12">
              <div class="form-block mx-auto">
                <div class="text-center mb-5">
                  <h3 class="text-uppercase">Sign Up</h3>
                </div>
                <form action="/#" method="post">
                  <div class="form-group">
                    <label for="username">Email</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="your-email@gmail.com"
                      id="username"
                    />
                  </div>
                  <div class="form-group last mb-3">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Your Password"
                      id="password"
                    />
                  </div>
                  <div class="form-group last mb-3">
                    <label for="re-password">Re-type Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Re-type Your Password"
                      id="re-password"
                    />
                  </div>

                  <div class="d-sm-flex mb-5 align-items-center">
                    <label class="control control--checkbox mb-0">
                      <span class="caption">
                        Creating an account means you're okay with our{" "}
                        <a href="/#">Terms and Conditions</a> and our{" "}
                        <a href="/#">Privacy Policy</a>.
                      </span>
                      <input type="checkbox" checked="checked" />
                      <div class="control__indicator"></div>
                    </label>
                  </div>

                  <input
                    type="submit"
                    value="Register"
                    class="btn btn-block py-2 btn-primary"
                  />

                  <span class="text-center my-3 d-block">or</span>

                  <div class="">
                    <a href="/#" class="btn btn-block py-2 btn-facebook">
                      <span class="icon-facebook mr-3"></span> Register with
                      Facebook
                    </a>
                    <a href="/#" class="btn btn-block py-2 btn-twitter">
                      <span class="icon-twitter mr-3"></span> Register with
                      Twitter
                    </a>
                    <a href="/#" class="btn btn-block py-2 btn-google">
                      <span class="icon-google mr-3"></span> Register with
                      Google
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
