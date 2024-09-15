const names = ["Liam", "Emma", "Noah", "Olivia", "Ava", "Sophia", "James", "Mia", "Elijah", "Isabella",
    "Lucas", "Charlotte", "Mason", "Amelia", "Ethan", "Harper", "Logan", "Evelyn", "Jackson", "Abigail"]


    export function generateRandomName() {
        return names[Math.floor(Math.random() * names.length)];
      }
      
export const createRandomString=(length)=> {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
  