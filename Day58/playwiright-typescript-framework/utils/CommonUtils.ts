export function generateBrandNewEmail(){
    return "arun"+Date.now()+"@xyz.com";
}

export function getValidRandomEmail(): string {
  const emails = [
    "amotooriplay1@gmail.com",
    "amotooriplay2@gmail.com",
    "amotooricap3@gmail.com",
    "amotooricap7@gmail.com"
  ];

  const index = Math.floor(Math.random() * emails.length);
  return emails[index];
}

