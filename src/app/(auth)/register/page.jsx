import Footer from "components/footer/footer";
import Header from "components/header/header";

export const metadata = {
  title: "Register page",
  description: "description for Register page",
};
const Page = () => {
  return (
<main className="px-3">
  <form style={{ textAlign: "left" }}>
    <div className="mb-4">
      <label htmlFor="username" className="form-label">
        Username
      </label>
      <input
        type="email"
        className="form-control"
        id="username"
        aria-describedby="emailHelp"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Email address
      </label>
      <input
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="exampleInputPassword1" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-control"
        id="exampleInputPassword1"
      />
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1">
        Check me out
      </label>
    </div>
    <button type="submit" className="btn btn-primary">
      Create Account
    </button>
  </form>
</main>

  );
};

export default Page;
