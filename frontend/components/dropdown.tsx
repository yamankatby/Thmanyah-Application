import { Popover } from "radix-ui";
import { PropsWithChildren } from "react";

const More = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth={0}
    className="jsx-8dd1f9521a2787d1 jsx-1598947942"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" stroke="none" d="M0 0h24v24H0z" />
    <path
      stroke="none"
      d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
    />
  </svg>
);

export default function Dropdown({ children }: PropsWithChildren) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className="inline-flex size-[28px] cursor-pointer items-center justify-center rounded-full outline-none"
          aria-label="Update dimensions"
        >
          <More className="w-[22px] text-inherit" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="z-[50] w-[200px] rounded-[5px] bg-gradient-to-tr from-[#404080] to-[#6B4080] p-[5px]"
          style={{
            boxShadow:
              "inset 0px 1px 1px rgba(255,255,255,.2),0px 5px 5px hsla(237,25%,12%,50%)",
          }}
          sideOffset={5}
          align="end"
        >
          {children}
          <Popover.Arrow className="fill-[#7D5B91]" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

function DropdownItem({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      className="w-full rounded px-3 py-1.5 text-left text-sm tracking-[-.5px] text-white hover:bg-black/15"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function DropdownSeparator() {
  return (
    <div
      className="h-[1px] w-full"
      style={{
        background:
          "linear-gradient(to right,rgba(255,255,255,0),rgba(255,255,255,.1),rgba(255,255,255,0))",
      }}
    />
  );
}

Dropdown.Item = DropdownItem;
Dropdown.Separator = DropdownSeparator;
