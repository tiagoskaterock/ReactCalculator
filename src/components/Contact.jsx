import { useState } from "react"
import SectionTitle from "./SectionTitle"
import "../css/contact.css"

function Contact() {
	const [inputs, setInputs] = useState({})

	const handleChange = (event) => {
		const name = event.target.name
		const value = event.target.value
		setInputs(values => ({...values, [name]: value}))
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(inputs)
	}
	
    return (
        <section className="section-light py-5">
            <div className="container">
                <SectionTitle title="Contact" />
                <form onSubmit={handleSubmit}>
                  <div className="mb-3 row">
					<div className="col-md-6">
						<label htmlFor="name" className="form-label col-12">
							Name
							<input 
								type="text" 
								className="form-control" 
								name="username" 
								aria-describedby="username"
								value={inputs.username || ""} 
								onChange={handleChange}
							/>
						</label>

						<label htmlFor="email" className="form-label col-12">
							Email
							<input 
								type="text" 
								className="form-control" 
								name="email" 
								aria-describedby="email"
								value={inputs.email || ""} 
								onChange={handleChange}
							/>
						</label>

						<label htmlFor="preference" className="form-label col-12">
							Preference
							<select value={inputs.preference} onChange={handleChange} className="form-control">
								<option value="js">JavaScript</option>
								<option value="php">PHP Hyper Text Preprocessor</option>
								<option value="sql">Structured Query Language</option>
								<option value="css">Cascade Style Sheet</option>
							</select>
						</label>
					</div>
						

					<label htmlFor="message" className="form-label col-md-6">
						Message
						<textarea 
							type="text" 
							className="form-control textarea-message" 
							name="message" 
							aria-describedby="message"
							value={inputs.message || ""} 
							onChange={handleChange}
						/>
					</label>
                  </div>

                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>        
    )
}

export default Contact
