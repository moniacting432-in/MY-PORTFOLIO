import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";


export  const ContactSection =() => {
    const {toast} = useToast();
    const [isSubmitting,setSubmitting]=useState(false);

 const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
     toast({
        title:"Message sent!",
        description:"Thank you for your message.I'll get back to you soon ."
     });
      setSubmitting(false);
    
    },1500);
   
 }


    return <section 
    id="contact" className="py-24 px-4 relative bg-secondary">
    <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Cotact Information</h3>
            <div className="space-y-6 justify-center">
            <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary"/>
            </div>
            <div>
              <h4 className="font-medium">Email</h4>  
              <a
                href="banerjeemanisha763@gmail.com" className="text-muted hover:text-primary transition-colors">
                banerjeemanisha763@gmail.com
              </a>
            </div>

            </div>
            <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary"/>
            </div>
            <div>
              <h4 className="font-medium">Phone</h4>  
              <a
                href="tel:7439304546" className="text-muted hover:text-primary transition-colors">
               7439304546
              </a>
            </div>

            </div>
            <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary"/>
            </div>
            <div>
              <h4 className="font-medium">Location</h4>  
              <a
               className="text-muted hover:text-primary transition-colors">
                kolkata,India
              </a>
            </div>
            </div>
            </div>
            <div className="pt-8">
            <h4 className="font-medium mb-4">Connect With Me</h4>
            <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/manishabanerjee/">
                    <Linkedin/>
                </a>
                <a href="https://www.instagram.com/manishaaaaa______03/?igsh=Y2RtZDVqdGs1c2Z5#">
                    <Instagram/>
                </a>
            </div>
            </div>
        </div>
         <div className="bg-card p-8 rounded-lg shadow-x5" onSubmit={handleSubmit}>
         <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
         <form className="space-y-6">
         <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
            <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                placeholder="Manisha Banerjee..."
            />
         </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
            <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                placeholder="manisha@gmail.com"
            />
         </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Message</label>
            <input type="text" id="message" name="message" required className="w-full px-4 py-3 rounded-md border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary resize-none"
                placeholder="Write your message here..."
            />
         </div>
         <button type="submit" 
         disabled={isSubmitting}
         className={cn("cosmic-button w-full flex items-center justify-center gap-2"

         )}>
         
         
         { isSubmitting ?"Sending..." : "Send Message"}
         <Send size={16}/>

         </button>

         </form>
         </div>
        </div>
        </div>
    </section>
};