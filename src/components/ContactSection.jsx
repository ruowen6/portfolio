import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitch,
  Twitter,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Feel free to reach out.
          I value every opportunity to connect and learn.
        </p>

        <div className="flex flex-col items-center gap-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            {/* Email */}
            <div className="flex flex-row md:flex-col items-center p-6 bg-card rounded-lg shadow-sm text-left md:text-center gap-4 hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-primary/10 shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium mb-1 md:mb-2">Email</h4>
                <a
                  href="mailto:ruowen.liu@hotmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm break-all"
                >
                  ruowen.liu@hotmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-row md:flex-col items-center p-6 bg-card rounded-lg shadow-sm text-left md:text-center gap-4 hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-primary/10 shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium mb-1 md:mb-2">Phone</h4>
                <a
                  href="tel:+358466213136"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +358 (0) 466213136
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-row md:flex-col items-center p-6 bg-card rounded-lg shadow-sm text-left md:text-center gap-4 hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-primary/10 shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium mb-1 md:mb-2">Location</h4>
                <span className="text-muted-foreground text-sm block">
                  Hervanta, Tampere, Finland
                </span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h4 className="font-medium mb-6 text-lg"> Connect With Me</h4>
            <div className="flex space-x-6 justify-center">
              <a
                href="https://www.linkedin.com/in/liuruowen"
                target="_blank"
                className="hover:text-primary transition-colors transform hover:scale-110 duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                target="_blank"
                className="hover:text-primary transition-colors transform hover:scale-110 duration-200"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                target="_blank"
                className="hover:text-primary transition-colors transform hover:scale-110 duration-200"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                target="_blank"
                className="hover:text-primary transition-colors transform hover:scale-110 duration-200"
              >
                <Twitch className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
