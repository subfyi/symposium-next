import React from 'react';

const Volunteer = () => {
    return (
        <section className="contact-form-area register-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="section-heading text-center">
                            <h2 className="section__title">Register Now</h2>

                        </div>
                    </div>
                </div>
                <div>


                    <div className="col-lg-12">
                        <div className="form-shared">
                            <form
                                method="POST"
                                action="https://iseser.com/register"
                                data-bitwarden-watching={1}
                            >

                                <div className="form-group row">
                                    <label htmlFor="name" className="col-md-2 col-form-label text-md-right">
                                        Name
                                    </label>
                                    <div className="col-md-4  ">
                                        <input
                                            id="name"
                                            type="text"
                                            name="Name"
                                            required="required"
                                            autoFocus="autofocus"
                                            className="form-control "
                                        />
                                    </div>
                                    <label htmlFor="name" className="col-md-2  col-form-label text-md-right">
                                        Surname
                                    </label>
                                    <div className="col-md-4  ">
                                        <input
                                            id="name"
                                            type="text"
                                            name="surname"
                                            required="required"
                                            autoFocus="autofocus"
                                            className="form-control "
                                        />
                                    </div>
                                </div>
                                <div className="form-group row ">
                                    <label className="col-md-2  col-form-label text-md-right">Title</label>
                                    <div className="col-md-4  ">
                                        <select name="u_title" className="form-control">
                                            <option value={1}> Prof. Dr.</option>
                                            <option value={2}> Assoc. Prof. Dr.</option>
                                            <option value={3}> Assist. Prof. Dr.</option>
                                            <option value={4}> Lecturer</option>
                                            <option value={5}> Lecturer PhD.</option>
                                            <option value={6}> Research Assistant</option>
                                            <option value={7}> Research Assistant PhD.</option>
                                            <option value={8}> PhD.</option>
                                            <option value={9}> Lecturer</option>
                                            <option value={16}> Expert</option>
                                            <option value={17}> Master Student</option>
                                            <option value={18}> PhD. Student</option>
                                            <option value={19}> Undergraduate Student</option>
                                            <option value={20}> Engineer</option>
                                            <option value={21}> Other</option>
                                        </select>
                                    </div>
                                    <label className="col-md-2  col-form-label text-md-right">Type</label>
                                    <div className="col-md-4  ">
                                        <select name="u_type" className="form-control">
                                            <option value={2}> Author</option>
                                            <option value={3}> Guest</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2  col-form-label text-md-right">Gender</label>
                                    <div className="col-md-4  ">
                                        <select name="gender" className="form-control">
                                            <option value={1}> Male</option>
                                            <option value={2}> Female</option>
                                        </select>
                                    </div>
                                    <label className="col-md-2  col-form-label text-md-right">
                                        Institution
                                    </label>
                                    <div className="col-md-4  ">
                                        <input
                                            type="text"
                                            name="institution"
                                            defaultValue
                                            required="required"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2  col-form-label text-md-right">Faculty</label>
                                    <div className="col-md-4  ">
                                        <input
                                            type="text"
                                            name="faculty"
                                            defaultValue
                                            required="required"
                                            className="form-control"
                                        />
                                    </div>
                                    <label className="col-md-2  col-form-label text-md-right">
                                        Department
                                    </label>
                                    <div className="col-md-4  ">
                                        <input
                                            type="text"
                                            name="department"
                                            defaultValue
                                            required="required"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2  col-form-label text-md-right">
                                        Mobile / GSM
                                    </label>
                                    <div className="col-md-4  ">
                                        <input
                                            type="text"
                                            name="iletisim"
                                            defaultValue
                                            className="form-control"
                                        />
                                    </div>
                                    <label htmlFor="email" className="col-md-2  col-form-label text-md-right">
                                        E-Mail Address
                                    </label>
                                    <div className="col-md-4  ">
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            defaultValue
                                            required="required"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label
                                        htmlFor="password"
                                        className="col-md-2  col-form-label text-md-right"
                                    >
                                        Password
                                    </label>
                                    <div className="col-md-4  ">
                                        <input
                                            id="password"
                                            type="password"
                                            name="password"
                                            required="required"
                                            className="form-control"
                                        />
                                    </div>
                                    <label
                                        htmlFor="password-confirm"
                                        className="col-md-2  col-form-label text-md-right"
                                    >
                                        Confirm Password
                                    </label>
                                    <div className="col-md-4  ">
                                        <input
                                            id="password-confirm"
                                            type="password"
                                            name="password_confirmation"
                                            required="required"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2  col-form-label text-md-right">
                                        Address :
                                    </label>
                                    <div className="col-md-10  ">
        <textarea
            id="editor"
            name="address"
            rows={2}
            className="form-control ck-editor__editable ck-editor__editable_inline ckeditor"
            defaultValue={""}
        />
                                    </div>
                                </div>
                                <div className="form-group row mb-0">
                                    <div className="col-md-4   offset-md-4">
                                        <button type="submit"  className="theme-btn submit__btn">Register</button>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Volunteer;
