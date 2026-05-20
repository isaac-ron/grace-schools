export const SITE = {
  name: "The Grace Schools",
  location: "Chepilat",
  motto: "A School with a Difference",
  founded: "27 July 2021",
  address: "Chepilat Town, Opposite Summit Hospital",
  phones: [
    { display: "0720 970 572", tel: "+254720970572" },
    { display: "0724 716 370", tel: "+254724716370" },
    { display: "0112 596 891", tel: "+254112596891" },
  ],
  email: "gracesschoolschepilat@gmail.com",
  director: "Pst. Walter Ong'ala",
} as const;

export const PRIMARY_PHONE = SITE.phones[0];
