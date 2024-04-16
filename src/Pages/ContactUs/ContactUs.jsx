import { Helmet } from "react-helmet-async";

const ContactUs = () => {
	return (
		<div>

<Helmet>
            <title>ContactUs-VacationBliss</title>
          </Helmet>
			<div className="space-y-4 text-center text-gray-600 mt-9 mb-9">
<h1 className="text-xl md:text-3xl font-bold underline">Contact Us</h1>
<p className="md:text-xl md:w-[700px] mx-auto">Have a question, suggestion, or just want to say hello? We had love to hear from you! Get in touch with us using one of the methods below:</p>

<p className="text-xl "><span className="font-bold">Email:</span>Vacassionbliss@gmail.com</p>
<p className="text-xl"><span className="font-bold">Phone:</span> +1 (123) 456-7890</p>
<p className="text-xl"><span className="font-bold">Address:</span>
123 Main Street,
Cityville, State,
Country, ZIP Code</p>

			</div>


			<div className="flex flex-col lg:flex-row lg:gap-40 gap-6 rounded-md bg-slate-200 mt-20 p-4 md:p-10">
				<div>
					<h2 className="md:text-6xl text-xl lg:w-[500px] font-bold text-center mt-10  text-gray-700">Also If You Have Any <span className="text-[#378CE7]">Problem</span> Tell Us</h2>
				</div>

				<div className="flex flex-col ">
					<h1 className="md:text-xl font-semibold">Email Address:</h1>
					<input className="md:h-14 h-10 p-4 rounded-xl" type="text" name="" id="" placeholder="User Email" />

					<h1 className="md:text-xl font-semibold mt-5">Your Problem Details:</h1>
					<textarea className="p-5 h-602 rounded-xl" id="comment" name="comment" rows="4" cols="50" placeholder="Tell us in 50 word"></textarea>

					<button className="btn mt-5 bg-[#378CE7] hover:bg-[#1181f8] text-[#ecf0f1]">Submit</button>
				</div>
			</div>





		</div>
	);
};

export default ContactUs;
