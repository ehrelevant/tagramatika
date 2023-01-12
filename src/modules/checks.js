
const examples = [
  {
    input: 'Mayroon daga sa kusina.',
    uncorrectedHtml: '<u id="uncorrected_text" class="uncorrected-text">Mayroon</u> daga sa kusina.',
    corrected: 'May daga sa kusina.',

    details: {
      mistake: 'Mayroon',
      correction: 'May',
      reason: 'May vs Mayroon',
      description: 'Ginagamit ang "may" kapag sinusundan ito ng pangngalang pambalana.'
    }
  },
  {
    input: `Gumamit ako ng kutsara't tinidor ng kumain ako kaninang hapunan.`,
    uncorrectedHtml: `Gumamit ako ng kutsara't tinidor <u id="uncorrected_text" class="uncorrected-text">ng</u> kumain ako kaninang hapunan.`,
    corrected: `Gumamit ako ng kutsara't tinidor nang kumain ako kaninang hapunan.`,

    details: {
      mistake: 'ng',
      correction: 'nang',
      reason: 'Ng vs Nang',
      description: 'Ginagamit ang "nang" bilang kasingkahulugan ng mga salitang “noong” at “upang” o “para”.'
    }
  },
  {
    input: "Sila ay nagkakain ng tanghalian.",
    uncorrectedHtml: 'Sila ay <u id="uncorrected_text" class="uncorrected-text">nagkakain</u> ng tanghalian.',
    corrected: "Sila ay kumakain ng tanghalian.",

    details: {
      mistake: "nagkakain",
      correction: "kumakain",
      reason: "Mungkahi sa gramatika",
      description: "Base sa mga datos, mas gamit ang salitang 'kumakain' dahil ito ay mas natural na gamitin."
    }
  },
]

function checkForExamples(contentText, applyTextboxExample) {
  let isExample = false;
  let idx = 0;

  for (; idx < examples.length; ++idx) {
    if (contentText === examples[idx].input) {
      isExample = true;
      break;
    }
  }

  if (isExample) {
    applyTextboxExample(examples[idx]);
  }
}

export { checkForExamples };