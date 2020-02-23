function money(i) {
  let result = 0;
  if (i =< 100,000) {
    result = i * 0.1;
  } else if (100,000 < i <= 200,000) {
    result = (10,000 + (i - 100,000) * 0.075);
  } else if (200,000 < i <= 400,000) {
    result = (17,500 + (i - 200,000) * 0.05);
  } else if (400,000 < i <= 600,000) {
    result = (27,500 + (i - 400,000) * 0.03);
  } else if (600,000 < i < 1,000,000) {
    result = (33,500 + (i - 600,000) * 0.015);
  } else {
    result = (39,500 + (i - 1,000,000) + 0.01);
  }

  console.log("bonus = " + result);
}