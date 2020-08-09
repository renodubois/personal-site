---
path: "/blog/2020-08-09-building-tabltop-introduction"
date: 2020-08-09
title: "Building Tabltop: Introduction"
draft: false
---

Tabltop is a mobile app that I’m working on every week in my free time. This blog post will be a good introduction as to what the app is, and how I’m going about the process of making it. There will likely be other posts as the project progresses, and if you’re interested in following along, I stream most work on my [Twitch channel](https://twitch.tv/RenoInMO), so give that a follow if you’d like to watch the streams live.

Tabltop is a check-in based social media app, focused on board games. Like most side projects, it was inspired by a personal need. Before COVID brought my board game playing to a halt, I’d visit my local board game bar all the time. While I did have several favorites, I usually preferred to find something new to try. Sometimes, someone in the group would have a game in mind, but on plenty of occasions, we’d run into one of two problems:

1. Nobody would have suggestions, but we wanted to play something new
2. We brought friends who didn’t play board games as much, and wanted to show them some of our favorites

The first problem is definitely solvable with existing tools - such as searching games on [Board Game Geek](https://www.boardgamegeek.com), or even just getting a recommendation from the staff. This worked well enough, but it still didn't beat coming prepared with a specific idea of what we wanted to play - it took time to find a game that seemed fun to the whole group, and it didn't leave us with time to really dig into all of our options.

The second issue has existing solutions that work, but tend to be clunky to use regularly - Board Game Geek does have a feature that lets you log games, which help you keep track of what games you’ve played and liked. More than once, we couldn’t remember the name of a great game we had played only a few months ago, having to rely on pure chance to ever re-discover it.

[Untapped](https://untappd.com/) is an app that has done really well solving similar problems, but in the craft beer industry. Not only does it let you keep track of beers you've tried, it's also turned into a valuable product for the breweries as well - many use Untappd to generate menus and current tap lists.

This concept really struck me as something I could apply to my board game problem - if I had an easy way to log and rate the games I played, suddenly I wouldn’t have to worry about the second problem I mention above - I could just check my log! Of course, building a log is a simple enough, but the beauty of services that add a social media element to this is that you’re able to see what your friends are logging and interact with them. Suddenly, questions about the game could be asked to a friend, not a stranger on a forum. This concept is what has me excited about Tabltop. If I ever wasn’t able to think of a game I wanted to play, it would be so easy to just see what my friends had been playing recently, and check out something they enjoyed. And this is what Tabltop was born out of.

As this is being written, I am early enough in the development process that things could change drastically, but I thought it would be a good idea to lay out my current vision of a minimum viable product I could release to the world.

- Board Game Check In
  - This is the main feature of the app. Simply pick the game you played, write a description of how it played, rate it out of five, and submit! Your play is now logged, and it can be recalled as needed.
  - There are also some optional items during this check in process:
    - Friends — if you’re with a group of friends, it’s helpful to remember who you played with (and your friends will also want to see this too!) so you’re able to tag friends in check ins you make. These will show up on the profiles of everyone involved in the gameplay session.
    - Images - take pictures of the gaming session, including the board, your friends, or whatever! These also show up on the post.
    - Location - this will keep track of where you played the game. Will mostly be for games played out at board game cafes or shops, not so much for games at home.
    - The result of the game - for simple multiplayer games - who won? If it was a coop game, did the players win or fail?
- Game Lists
  - These are simple collections of games grouped together. The app will come with 2 by default: _Want to Play_ and _My Collection_. You’ll also be able to make more private/public lists as needed, but all should function the same.
- Trophies/Badges/Gamification
  - I’m a big sucker for (optional) gamification so this seemed like a great feature to have. The base ones will be based on game type, but event based badges and special occasions could be a thing too!

That’s about it for the base MVP features. I'm excited to get this app out

As a reminder, most work on the app is done live on [Twitch](https://www.twitch.tv/RenoInMO), and you can also view the previous streams on [YouTube](https://www.youtube.com/channel/UCiuLXAfvW5gbX89_R2cpOyg/) as well.

This is all subject to change, and I’d love to hear your thoughts on what I’ve presented here. Send me an email at [renoinmo@gmail.com](mailto:renoinmo@gmail.com) with your comments, questions or feedback, or send me a [tweet](https://twitter.com/RenoInMO)!
