import fs from "fs";

const now = new Date();

const todayDay = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    timeZone: "Asia/Bangkok",
}).format(now);

const todayDate = new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "Asia/Bangkok",
}).format(now);

const dayBubbleWidths = {
    Monday: 235,
    Tuesday: 235,
    Wednesday: 260,
    Thursday: 245,
    Friday: 220,
    Saturday: 245,
    Sunday: 230,
};

fs.readFile("template.svg", "utf-8", (err, data) => {
    if (err) return console.error(err);

    data = data.replace("{todayDay}", todayDay);
    data = data.replace("{dayBubbleWidth}", dayBubbleWidths[todayDay]);

    data = data.replace("{todayDate}", todayDate);

    fs.writeFile("chat.svg", data, (err) => {
        if (err) return console.error(err);
        console.log("chat.svg generated successfully:", todayDay, todayDate);
    });
});
