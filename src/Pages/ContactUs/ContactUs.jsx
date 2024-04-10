
const ContactUs = () => {
    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
	<h2 className="mb-4 text-2xl font-semibold leading-tight">Our Contacts</h2>
	<div className="overflow-x-auto">
		<table className="w-full p-6 text-xs text-left whitespace-nowrap">
			<colgroup>
				<col className="w-5" />
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-5" />
			</colgroup>
			<thead>
				<tr className="dark:bg-gray-300">
					<th className="p-3">A-Z</th>
					<th className="p-3">Name</th>
					<th className="p-3">Job title</th>
					<th className="p-3">Phone</th>
					<th className="p-3">Email</th>
					<th className="p-3">Address</th>
					<th className="p-3">
						<span className="sr-only">Edit</span>
					</th>
				</tr>
			</thead>
			<tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
				<tr>
					<td className="px-3 text-2xl font-medium dark:text-gray-600">A</td>
					<td className="px-3 py-2">
						<p>Dwight Adams</p>
					</td>
					<td className="px-3 py-2">
						<span>UI Designer</span>
						<p className="dark:text-gray-600">Spirit Media</p>
					</td>
					<td className="px-3 py-2">
						<p>555-873-9812</p>
					</td>
					<td className="px-3 py-2">
						<p>dwight@adams.com</p>
					</td>
					<td className="px-3 py-2">
						<p>71 Cherry Court, SO</p>
						<p className="dark:text-gray-600">United Kingdom</p>
					</td>
					<td className="px-3 py-2">
						<button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
							<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
								<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
							</svg>
						</button>
					</td>
				</tr>
				<tr>
					<td className="px-3 text-2xl font-medium dark:text-gray-600"></td>
					<td className="px-3 py-2">
						<p>Richie Allen</p>
					</td>
					<td className="px-3 py-2">
						<span>Geothermal Technician</span>
						<p className="dark:text-gray-600">Icecorps</p>
					</td>
					<td className="px-3 py-2">
						<p>555-129-0761</p>
					</td>
					<td className="px-3 py-2">
						<p>richie@allen.com</p>
					</td>
					<td className="px-3 py-2">
						<p>Knesebeckstrasse 32, Obersteinebach</p>
						<p className="dark:text-gray-600">Germany</p>
					</td>
					<td className="px-3 py-2">
						<button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
							<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
								<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
							</svg>
						</button>
					</td>
				</tr>
			</tbody>
			<tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
				<tr>
					<td className="px-3 text-2xl font-medium dark:text-gray-600">B</td>
					<td className="px-3 py-2">
						<p>Alex Bridges</p>
					</td>
					<td className="px-3 py-2">
						<span>Administrative Services Manager</span>
						<p className="dark:text-gray-600">Smilectronics</p>
					</td>
					<td className="px-3 py-2">
						<p>555-238-9890</p>
					</td>
					<td className="px-3 py-2">
						<p>alex@bridges.com</p>
					</td>
					<td className="px-3 py-2">
						<p>Hooivelden 117, Kortrijk</p>
						<p className="dark:text-gray-600">Belgium</p>
					</td>
					<td className="px-3 py-2">
						<button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
							<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
								<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
							</svg>
						</button>
					</td>
				</tr>
				<tr>
					<td className="px-3 text-2xl font-medium dark:text-gray-600"></td>
					<td className="px-3 py-2">
						<p>Lynette Brown</p>
					</td>
					<td className="px-3 py-2">
						<span>Camera Operator</span>
						<p className="dark:text-gray-600">Surge Enterprises</p>
					</td>
					<td className="px-3 py-2">
						<p>555-521-5712</p>
					</td>
					<td className="px-3 py-2">
						<p>lynette@brown.com</p>
					</td>
					<td className="px-3 py-2">
						<p>22 rue de la Boétie, Poitiers</p>
						<p className="dark:text-gray-600">France</p>
					</td>
					<td className="px-3 py-2">
						<button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
							<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
								<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
							</svg>
						</button>
					</td>
				</tr>
			</tbody>
			<tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
				<tr>
					<td className="px-3 text-2xl font-medium dark:text-gray-600">C</td>
					<td className="px-3 py-2">
						<p>Mariah Claxton</p>
					</td>
					<td className="px-3 py-2">
						<span>Nuclear Technician</span>
						<p className="dark:text-gray-600">White Wolf Brews</p>
					</td>
					<td className="px-3 py-2">
						<p>555-654-9810</p>
					</td>
					<td className="px-3 py-2">
						<p>mariah@claxton.com</p>
					</td>
					<td className="px-3 py-2">
						<p>R Oliveirinhas 71, Maia</p>
						<p className="dark:text-gray-600">Portugal</p>
					</td>
					<td className="px-3 py-2">
						<button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
							<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
								<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
							</svg>
						</button>
					</td>
				</tr>
				<tr>
					<td className="px-3 text-2xl font-medium dark:text-gray-600"></td>
					<td className="px-3 py-2">
						<p>Hermila Craig</p>
					</td>
					<td className="px-3 py-2">
						<span>Production Engineer</span>
						<p className="dark:text-gray-600">Cavernetworks Co.</p>
					</td>
					<td className="px-3 py-2">
						<p>555-091-8401</p>
					</td>
					<td className="px-3 py-2">
						<p>hermila@craig.com</p>
					</td>
					<td className="px-3 py-2">
						<p>Rua da Rapina 89, Espeja</p>
						<p className="dark:text-gray-600">Spain</p>
					</td>
					<td className="px-3 py-2">
						<button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
							<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
								<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
							</svg>
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>


<div className="flex flex-col lg:flex-row lg:gap-40 gap-6 rounded-md bg-slate-200 mt-20 p-4 md:p-10">
    <div>
    <h2 className="md:text-6xl text-xl lg:w-[500px] font-bold text-center mt-10  text-gray-700">Also If You Have Any <span className="text-[#378CE7]">Problem</span> Tell Us</h2>
    </div>

    <div className="flex flex-col ">
<h1 className="md:text-xl font-semibold">Email Address:</h1>
<input className="md:h-14 h-10 p-4 rounded-xl" type="text" name="" id="" placeholder="User Email"/>

<h1 className="md:text-xl font-semibold mt-5">Your Problem Details:</h1>
<textarea className="p-5 h-602 rounded-xl" id="comment" name="comment" rows="4" cols="50" placeholder="Tell us in 50 word"></textarea>

<button className="btn mt-5 bg-[#378CE7] hover:bg-[#1181f8] text-[#ecf0f1]">Submit</button>
    </div>
</div>





        </div>
    );
};

export default ContactUs;
