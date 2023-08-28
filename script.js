const horoschoped_messages = ['Your sign is sun', 'You are having good luck', 'you should start getting used to it', 'you should: "trust no one"',
    'You have an amazing personality', 'You hate being in crowdys'];

function user_message() {
    const random_message = Math.floor(Math.random() * horoschoped_messages.length)
    return horoschoped_messages[random_message]
}

const finalOutPut = user_message();
document.write(finalOutPut);