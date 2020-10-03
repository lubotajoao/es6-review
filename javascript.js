/**
 * Exercise Filter
 */
const channels = [
  { name: "HBO", premium: true },
  { name: "LIFE", premium: false },
  { name: "Max", premium: true },
  { name: "Cooking channel", premium: false },
  { name: "WOBI", premium: false },
];

const user = {
  name: "Lubota",
  premium: true,

  premiumChannels: function () {
    // GET THE PREMIUM CHANNELS IS "PREMIUM" IS true
    const $this = this;
    return channels.filter(function (channel) {
      return channel.premium && $this.premium;
    });
  },

  channels: function () {
    // GET THE NON-PREMIUM CHANNELS
    return channels.filter(function (channel) {
      return channel.premium === false;
    });
  },
};
console.log(user.premiumChannels());
// brings HBO and MAX
console.log(user.channels());
// brings LIFE, COOCKING CHANNEL AND WOBI
