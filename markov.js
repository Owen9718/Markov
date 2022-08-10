/** Textual markov chain generator */

class MarkovMachine {
	/** build markov machine; read in text.*/

	constructor(text) {
		let words = text.split(/[ \r\n]+/);
		this.words = words.filter((c) => c !== '');
		this.makeChains();
	}

	/** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

	makeChains() {
		// TODO
		const obj = {};
		for (let i = 0; i <= this.words.length; i++) {
			let word = this.words[i];
			let next = this.words[i + 1] || null;
			if (!(word in obj)) {
				obj[word] = [ next ];
			} else {
				obj[word].push(next);
			}
		}
		this.obj = obj;
	}

	/** return random text from chains */

	makeText(numWords = 100) {
		let arr = [];
		for (let word in this.obj) {
			if (arr.length < numWords) {
				let rand = Math.floor(Math.random() * this.obj[word].length);
				arr.push(word, this.obj[word][rand]);
			} else {
				return arr.join(' ');
			}
		}
	}
}

module.exports = { MarkovMachine };
