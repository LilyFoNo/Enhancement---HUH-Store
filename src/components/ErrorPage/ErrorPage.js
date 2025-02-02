import "../ErrorPage/ErrorPage.css"

const ErrorPage = () => {
  return (
    <div className="error-container">
      <h1>
        4<span className="emoji">😞</span>4
      </h1>
      <p className="pError">Oops! The page you're looking for doesn't exist.</p>
    </div>
  )
}

export default ErrorPage