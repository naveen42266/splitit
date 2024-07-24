import Navbar from "../../components/navbar";
const tips = [
  {
    title: 'Group circles are your friends!',
    answer: 'Group circles show the balances in the group. The bigger the circle, the bigger the debt. The person with the biggest debt in the middle should pay next. You can easily create a new expense with this member as the payer by clicking on the circle.'
  },
  {
    title: 'Incomes are useful for deposits and more',
    answer: `Got money back from a deposit? Add it as an income. It acts as a negative expense, so it lowers down the total spent amount. It's also useful in other cases where the group actually earns some money.`
  },
  {
    title: 'Exchange rates are from Yahoo, but you can change them',
    answer: 'If you add a transaction in a different currency, the exchange rate is automatically downloaded from a Yahoo service based on the current exchange rate for each day. You can see it on the transaction detail screen. You can edit the exchange rate or the calculated amount in group currency. If you do that, all future transactions will use this exchange rate until you change back to current by clicking on three dots on the card. This is useful when you want to use one exchange rate for the whole vacation. You can also change all exchange rates from Edit group screen.'
  },
  {
    title: 'Default share is useful for couples and families',
    answer: `When you edit a member, you can set a default share. If you set it to 2 for example, this member will count as two in all new transactions. It's useful for couples and families - if these people act together as one financial unit, create one member with a higher default share.`
  },
  {
    title: 'A member left the group? Disable them for new transactions',
    answer: `If somebody left your group, you don't want to delete them permanently. That would alter the history and debts. However, you can edit the member and uncheck "Include this member in new transactions". This member then won't appear in future transactions.`
  },
  {
    title: 'Say which member you are for better experience',
    answer: `If you go to the member detail screen, you can check "This is me". If you do that, this member (you) will be automatically pre-selected as who paid in future transactions. You will see a small dot next to the avatar which will highlight you.`
  },
  {
    title: 'Add member photos for a nicer group',
    answer: 'When there is no member photo, we show a grey avatar with the first letter of the name. It could be confusing if you have multiple people with the same first letter. Add photos to members in the member detail and the whole app will be nicer and more intuitive.'
  },
  {
    title: 'Debts are settled, now archive the group',
    answer: `With old, inactive groups, it's best to archive them. They won't clutter the main screen and the app will load faster. Anyone can do this in the Edit group screen, when the debts are settled. Anybody can then preview the group from the My groups screen. Only the owner can restore the group.`
  },
  {
    title: 'Turn off debt minimization to pay only direct debts',
    answer: `Our debt algorithm is battle-tested and you can rely on it. It minimizes the number of transactions between people by transferring debts, so you might end up paying to somebody you don't directly owe. If you don't like that, you can turn off debt minimization in the Edit group screen.`
  },
  {
    title: 'Long-press to access handy actions',
    answer: 'You can long-press various places in the app for quick actions: a transaction to edit or duplicate it, a group circle to edit that member, a member in a simple split to select only that member, and a group in My groups screen to edit that group.'
  },
  {
    title: `Don't like subscriptions? Try Group Premium`,
    answer: `Group Premium has all the features like a regular Premium, but it's enabled for everyone in a single group. You can purchase it as a one-time payment, it's not a subscription. You can also lower the cost by adding it as a group expense. When the owner archives or deletes the group, you can assign the Group Premium to another group.`
  },
  {
    title: `Do you miss 'the voice'?`,
    answer: `The old Settle Up app had a feature which would say who should pay out loud. We have something even better: Google Assistant, Alexa, and Cortana integrations which do that and more for all supported devices. Just tell your assistant, "Ask Settle Up who should pay".`
  },
  {
    title: 'Automate recurring expenses',
    answer: 'If you have expenses which you add periodically (e.g. monthly rent), consider setting them as a recurring transaction. They will be generated automatically and everyone will receive a notification when that happens. You can turn any transaction into a recurring one at the bottom of the transaction detail screen.'
  },
  {
    title: 'How to get 1 Premium feature forever',
    answer: 'Invite your friends to any of your groups. When 5 of them join your groups as new users of Settle Up, you will unlock the option to receive 1 Premium feature forever. You will receive notifications about your progress. Also, you will be invited to join our Superuser community on Slack. This will allow you to access Settle Up developers directly, enjoy special offers, and vote for new features.'
  },
  {
    title: 'Import groups from Splitwise',
    answer: 'Migrating your groups from a different app can be painful, but we have you covered. You can easily import the current members and their balances into Settle Up. Just export your data in the group settings of the Splitwise web app and import them while creating your group in Settle Up. When you finish, just share your new group with your friends and continue recording expenses as before.'
  }
]
export default function Tips() {
  //width={'500px'} height={'610px'}
  return (
    <div className="">
      <Navbar />
      <div className="p-5">
        <div className="text-4xl pt-3">Settle Up Tips</div>
        {tips?.map((each, index) => {
          return (
            <div key={index} className="text-[#888888]">
              <div className="text-xl font-bold pt-3">{each?.title}</div>
              <p className="text-lg pt-3">{each?.answer}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}
