import { GlobeIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RESUME_DATA } from "@/data/resume-data";
import * as D from "@/components/ui/dialog";
import CopyLinkButton from "./CopyLinkButton";
import { Input } from "../ui/input";

interface LocationLinkProps {
  location: typeof RESUME_DATA.location;
  locationLink: typeof RESUME_DATA.locationLink;
}

function LocationLink({ location, locationLink }: LocationLinkProps) {
  return (
    <p className="max-w-md items-center text-pretty  text-xs text-foreground">
      <a
        className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
        href={locationLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Location: ${location}`}
      >
        <GlobeIcon className="size-3" aria-hidden="true" />
        {location}
      </a>
    </p>
  );
}

interface SocialButtonProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

function SocialButton({ href, icon: Icon, label }: SocialButtonProps) {
  return (
    <Button
      className="size-8 fill-current text-foreground"
      variant="outline"
      size="icon"
      asChild
    >
      <a href={href} aria-label={label} target="_blank">
        <Icon className="size-4" aria-hidden="true" />
      </a>
    </Button>
  );
}

interface ContactButtonsProps {
  contact: typeof RESUME_DATA.contact;
  personalWebsiteUrl?: string;
}

export function ContactButtons({ contact }: ContactButtonsProps) {
  return (
    <div
      className="flex gap-x-1 pt-1  text-sm text-foreground/80 print:hidden"
      role="list"
      aria-label="Contact links"
    >
      {contact.social.map((social) => (
        <SocialButton
          key={social.name}
          href={social.url}
          icon={social.icon}
          label={social.name}
        />
      ))}
      {RESUME_DATA.contact.email && (
        <D.Dialog>
          <D.DialogTrigger asChild>
            <Button className="size-8" variant="outline" size="icon">
              <MailIcon className="size-4" aria-hidden="true" />
            </Button>
          </D.DialogTrigger>
          <D.DialogContent
            className="max-w-[300px] bg-white dark:bg-slate-900"
            data-theme="dark"
          >
            <D.DialogHeader>
              <D.DialogTitle className="p-0">Email Address</D.DialogTitle>
              <D.DialogDescription></D.DialogDescription>
            </D.DialogHeader>
            <div className="flex items-center space-x-2 ">
              <div className="grid flex-1 gap-2">
                <label htmlFor="link" className="sr-only">
                  Link
                </label>
                <Input
                  id="link"
                  defaultValue={RESUME_DATA.contact.email}
                  readOnly
                />
              </div>
              <CopyLinkButton
                variant="default"
                url={RESUME_DATA.contact.email}
                className="p-3 "
              />
            </div>
          </D.DialogContent>
        </D.Dialog>
      )}
    </div>
  );
}

/**
 * Header component displaying personal information and contact details
 */
export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex-1 space-y-1.5">
        <h1 className="text-2xl font-bold" id="resume-name">
          {RESUME_DATA.name}
        </h1>
        <p className="max-w-md text-pretty py-2" aria-labelledby="resume-name">
          {RESUME_DATA.about}
        </p>

        <LocationLink
          location={RESUME_DATA.location}
          locationLink={RESUME_DATA.locationLink}
        />

        <ContactButtons
          contact={RESUME_DATA.contact}
          personalWebsiteUrl={RESUME_DATA.personalWebsiteUrl}
        />
      </div>

      <Avatar className="size-28" aria-hidden="true">
        <AvatarImage
          alt={`${RESUME_DATA.name}'s profile picture`}
          src={RESUME_DATA.avatarUrl}
        />
        <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
      </Avatar>
    </header>
  );
}
