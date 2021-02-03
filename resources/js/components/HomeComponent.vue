<template>
    <div>
         <header class="blog-header py-3">
        <div class="row flex-wrap justify-content-between align-items-center">
            <div class="col-xs-12 col-sm-12 col-md-4 ">
                <div class="left-nav-links">
                    <a class="active" href="#">Home</a>
                    <a class="" href="#">FAQs</a>
                    <a class="" href="#">Rules</a>
                    <a class="" href="#">About</a>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="logo-wrap text-center">
                    <a class="blog-header-logo" href="#">Large</a>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="auth-action-wrap d-flex justify-content-end align-items-center">
                    <a class="btn btn-auth" data-toggle="modal" data-target="#exampleModal">Sign In</a>
                    <a class="btn btn-auth" href="#">Sign Up</a>
                </div>
            </div>
        </div>
    </header>

    <section class="slide">
        <div class="img-wrap">
            <div class="img"></div>
            <div class="overlay"></div>
        </div>
    </section>

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="titles-wrap">
                        <h5 class="modal-title" id="exampleModalLabel">Welcome Back</h5>
                        <p class="signin-heading mb-0">SignIn to Clique Picks</p>
                    </div>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="">
                        <label for="">Email</label>
                        <div class="input-group mb-2 mr-sm-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </div>
                            </div>
                            <input type="email" class="form-control" id="inlineFormInputGroupUsername2"
                                placeholder="Email" />
                        </div>
                        <label for="">Password</label>
                        <div class="input-group mb-2 mr-sm-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                </div>
                            </div>
                            <input type="password" class="form-control" id="inlineFormInputGroupUsername2"
                                placeholder="Password" />
                        </div>
                        <div class="action mt-3 d-flex justify-content-between align-items-center">
                            <p class="forgot-password mb-0">
                                <a href="">Forgot Password?</a>
                            </p>
                            <button class="btn btn-auth" type="submit">Sign In</button>
                        </div>
                    </form>
                </div>
                <div class="modal-footer d-block text-center">
                    <p class="social-auth-title">or Sign-In with</p>
                    <div class="social-action-wrap text-center">
                        <button class="btn btn-social-auth fb-bg" type="submit">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                        </button>
                        <button class="btn btn-social-auth google-bg" type="submit">
                            <i class="fa fa-google" aria-hidden="true"></i>
                        </button>
                    </div>
                    <p class="signup-link mb-1 mt-3">
                        Don't have an account <a class="signup">SignUp</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
