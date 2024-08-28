export function useDate(): { time: string; hour: number; day: number; month: string; year: number } {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour12: false });
    const hour = now.getHours();
    const day = now.getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();
  
    return { time, hour, day, month, year };
  }