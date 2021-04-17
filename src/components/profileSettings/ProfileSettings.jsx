import React from "react";

function ProfileSettings() {
  return (
    <div className="container bg-light rounded w-50">
      <form>
        <div className="mb-3">
          <label htmlFor="changeEmail" className="form-label">
            Change email address
          </label>
          <input
            type="email"
            className="form-control"
            aria-describedby="changeEmail"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="changePassword" className="form-label">
            Change password
          </label>
          <input type="password" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="changeFirstName" className="form-label">
            First name
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="changeLastName" className="form-label">
            Change last name
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="changePhone" className="form-label">
            Change phone number
          </label>
          <input type="number" className="form-control" />
        </div>
        <div className="form-floating">
          <textarea className="form-control" placeholder="..."></textarea>
          <label htmlFor="floatingTextarea">Add short bio</label>
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Save changes
        </button>
      </form>
    </div>
  );
}

export default ProfileSettings;
