import { whiteStar } from "./assets";

export const navLinks = [
  {
    id: "about",
    title: "Overview",
    type: "reference",
  },
  {
    id: "timeline",
    title: "Timeline",
    type: "reference",
  },
  {
    id: "faqs",
    title: "FAQs",
    type: "reference",
  },
  {
    id: "contact",
    title: "Contact",
    type: "link",
  },
];

export const menuButton = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="14"
    viewBox="0 0 19 14"
    fill="none"
  >
    <path
      d="M1.35714 0H8.14286C8.50279 0 8.84799 0.1475 9.1025 0.410051C9.35701 0.672601 9.5 1.0287 9.5 1.4C9.5 1.7713 9.35701 2.1274 9.1025 2.38995C8.84799 2.6525 8.50279 2.8 8.14286 2.8H1.35714C0.997206 2.8 0.652012 2.6525 0.397498 2.38995C0.142984 2.1274 0 1.7713 0 1.4C0 1.0287 0.142984 0.672601 0.397498 0.410051C0.652012 0.1475 0.997206 0 1.35714 0ZM10.8571 11.2H17.6429C18.0028 11.2 18.348 11.3475 18.6025 11.6101C18.857 11.8726 19 12.2287 19 12.6C19 12.9713 18.857 13.3274 18.6025 13.5899C18.348 13.8525 18.0028 14 17.6429 14H10.8571C10.4972 14 10.152 13.8525 9.8975 13.5899C9.64298 13.3274 9.5 12.9713 9.5 12.6C9.5 12.2287 9.64298 11.8726 9.8975 11.6101C10.152 11.3475 10.4972 11.2 10.8571 11.2ZM1.35714 5.6H17.6429C18.0028 5.6 18.348 5.7475 18.6025 6.01005C18.857 6.2726 19 6.6287 19 7C19 7.3713 18.857 7.7274 18.6025 7.98995C18.348 8.2525 18.0028 8.4 17.6429 8.4H1.35714C0.997206 8.4 0.652012 8.2525 0.397498 7.98995C0.142984 7.7274 0 7.3713 0 7C0 6.6287 0.142984 6.2726 0.397498 6.01005C0.652012 5.7475 0.997206 5.6 1.35714 5.6Z"
      fill="white"
    />
  </svg>
);

export const closeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="11"
    viewBox="0 0 11 11"
    fill="none"
  >
    <path
      d="M0.307505 10.6925C0.504459 10.8894 0.771552 11 1.05005 11C1.32854 11 1.59563 10.8894 1.79259 10.6925L5.50634 6.97874L9.22009 10.6925C9.41818 10.8838 9.68348 10.9897 9.95886 10.9873C10.2342 10.9849 10.4977 10.8744 10.6924 10.6797C10.8871 10.485 10.9976 10.2216 11 9.94617C11.0024 9.6708 10.8965 9.4055 10.7052 9.20741L6.99142 5.49366L10.7052 1.77991C10.8965 1.58182 11.0024 1.31652 11 1.04114C10.9976 0.765767 10.8871 0.502346 10.6924 0.307617C10.4977 0.112889 10.2342 0.00243378 9.95886 4.1008e-05C9.68348 -0.00235271 9.41818 0.103509 9.22009 0.294824L5.50634 4.00858L1.79259 0.294824C1.5945 0.103509 1.3292 -0.00235271 1.05383 4.1008e-05C0.778448 0.00243378 0.515027 0.112889 0.320299 0.307617C0.12557 0.502346 0.0151142 0.765767 0.0127213 1.04114C0.0103283 1.31652 0.11619 1.58182 0.307505 1.77991L4.02126 5.49366L0.307505 9.20741C0.110609 9.40437 0 9.67146 0 9.94995C0 10.2284 0.110609 10.4955 0.307505 10.6925Z"
      fill="#F8F8F8"
    />
  </svg>
);

export const checkIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
  >
    <circle cx="8.5" cy="8.5" r="8.5" fill="blueviolet" />
    <path d="M5 8L7 10.5L13.5 6" stroke="white" strokeWidth="2" />
  </svg>
);

export const Stroke = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "255"} //"255"
      height={height ? height : "17"} //"17"
      viewBox="0 0 255 17"
      fill="none"
    >
      <path
        d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043"
        stroke="#FF26B9"
        strokeWidth="5"
      />
    </svg>
  );
};

export const instagramIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
      fill="white"
    />
  </svg>
);
export const twitterIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="17"
    viewBox="0 0 19 17"
    fill="none"
  >
    <path
      d="M6.04545 0H0L7.13364 9.3619L0.388636 17H2.67727L8.19418 10.7533L12.9545 17H19L11.5658 7.2437L17.9636 0H15.675L10.5053 5.8531L6.04545 0ZM13.8182 15.3L3.45455 1.7H5.18182L15.5455 15.3H13.8182Z"
      fill="white"
    />
  </svg>
);
export const facebookIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="20"
    viewBox="0 0 11 20"
    fill="none"
  >
    <path
      d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z"
      fill="#F8F8F8"
    />
  </svg>
);

export const linkedinIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
      fill="#F8F8F8"
    />
  </svg>
);

export const attributes = [
  {
    title: "Innovation and Creativity",
    description: `
              Evaluate the uniqueness and creativity of the solution. Consider
              whether it addresses a real-world problem in a novel way or
              introduces innovative features.`,
  },
  {
    title: "Functionality",
    description: ` Assess how well the solution works. Does it perform its 
intended functions effectively and without major issues? Judges would
consider the completeness and robustness of the solution.`,
  },
  {
    title: "Impact and Relevance",
    description: `Determine the potential impact of the solution 
in the real world. Does it address a significant problem, and is it relevant 
to the target audience? Judges would assess the potential social, 
economic, or environmental benefits.`,
  },
  {
    title: "Technical Complexity",
    description: `Evaluate the technical sophistication of the solution. 
Judges would consider the complexity of the code, the use of advanced 
technologies or algorithms, and the scalability of the solution.`,
  },

  {
    title: "Adherence to Hackathon Rules",
    description: `Judges will Ensure that the team adhered 
to the rules and guidelines of the hackathon, including deadlines, use of 
specific technologies or APIs, and any other competition-specific requirements.`,
  },
];

export const faqs = [
  {
    question: "Can I work on a project I started before the hackathon?",
    answer: `The hackathon is a 24-hour event where teams of developers and designers work together to solve real-world problems.`,
  },
  {
    question: "What happens if I need help during the hackathon?",
    answer: `Teams of developers and designers work together to solve real-world problems.`,
  },
  {
    question: "What happens if I don't have an idea for a project?",
    answer: `Teams of developers and designers work together to solve real-world problems.`,
  },
  {
    question: "Can I join a team or do I have to come with one?",
    answer: `Teams of developers and designers work together to solve real-world problems.`,
  },
  {
    question: "What happens after the hackathon ends?",
    answer: `The hackathon is a 24-hour event where teams of developers and designers work together to solve real-world problems.`,
  },
  {
    question: "Can I work on a project I started before the hackathon?",
    answer: `The hackathon is a 24-hour event where teams of developers and designers work together to solve real-world problems.`,
  },
];

export const timeline = [
  {
    title: "Hackathon Announcement",
    date: "November 18, 2023",
    description: `The getlinked tech hackathon 1.0 is formally announced
to the general public and teams begin to get ready to register`,
  },
  {
    title: "Teams Registration begins",
    date: "November 18, 2023",
    description: `Interested teams can now show their interest in the
getlinked tech hackathon 1.0 2023 by proceeding to register`,
  },
  {
    title: "Teams Registration ends",
    date: "November 18, 2023",
    description: `Interested Participants are no longer Allowed to
register`,
  },
  {
    title: "Announcement of the accepted teams and ideas",
    date: "November 18, 2023",
    description: `All teams whom idea has been accepted into getlinked tech
hackathon 1.0 2023 are formally announced`,
  },
  {
    title: "Getlinked Hackathon 1.0 Offically Begins",
    date: "November 18, 2023",
    description: `Accepted teams can now proceed to build their
ground breaking skill driven solutions`,
  },
  {
    title: "Demo Day",
    date: "November 18, 2023",
    description: `Teams get the opportunity to pitch their projects to judges.
The winner of the hackathon will also be announced on
this day`,
  },
];

export const socialLinks = [
  {
    name: "Instagram",
    url: "#",
    icon: instagramIcon,
  },
  {
    name: "Twitter",
    url: "#",
    icon: twitterIcon,
  },
  {
    name: "Facebook",
    url: "#",
    icon: facebookIcon,
  },
  {
    name: "LinkedIn",
    url: "#",
    icon: linkedinIcon,
  },
];

export const groupSizes = [
  { value: 1, name: "1" },
  { value: 2, name: "2" },
  { value: 3, name: "3" },
  { value: 4, name: "4" },
  { value: 5, name: "5" },
  { value: 6, name: "6" },
  { value: 7, name: "7" },
  { value: 8, name: "8" },
  { value: 9, name: "9" },
  { value: 10, name: "10" },
];
