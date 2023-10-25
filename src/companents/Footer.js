import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between p-4 md:p-10 bg-colors-gray100">
        <div>
          <h3 className="text-colors-lacivert font-semibold text-xl">
            Bandage
          </h3>
        </div>
        <div className="text-colors-blue flex flex-row items-center space-x-8 md:pr-10">
          <BsInstagram />
          <BsFacebook />
          <BsTwitter />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between p-4 md:p-10 text-colors-gray">
        <div className="list-none text-left">
          <h5 className="text-colors-lacivert">Company Info</h5>
          <li>About Us</li>
          <li>Carrier</li>
          <li>We are hiring</li>
          <li>Blog</li>
        </div>
        <div className="list-none text-left">
          <h5 className="text-colors-lacivert pt-3">Legal</h5>
          <li>About Us</li>
          <li>Carrier</li>
          <li>We are hiring</li>
          <li>Blog</li>
        </div>
        <div className="list-none text-left">
          <h5 className="text-colors-lacivert pt-3">Features</h5>
          <li>Business Marketing</li>
          <li>User Analytics</li>
          <li>Live Chat</li>
          <li>Unlimited Support</li>
        </div>
        <div className="list-none text-left">
          <h5 className="text-colors-lacivert pt-3">Resources</h5>
          <li>IOS & Android</li>
          <li>Watch a Demo</li>
          <li>Customers</li>
          <li>API</li>
        </div>
        <div className="list-none text-left">
          <h5 className="text-colors-lacivert pt-3">Get in Touch</h5>
          <form className="border rounded-md">
            <label className="bg-colors-gray100 border p-3">
              <input type="text" name="name" placeholder="Your Email" />
            </label>

            <label className="bg-colors-blue p-3">
              <input
                className="text-colors-white"
                type="submit"
                value="Subscribe"
              />
            </label>
          </form>
        </div>
      </div>
      <div className="p-4 md:p-10 bg-colors-gray100 flex justify-start text-colors-gray">
        <h6>Made With Love By Finland. All Rights Reserved</h6>
      </div>
    </div>
  );
}

export default Footer;
