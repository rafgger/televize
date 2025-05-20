// Data pro graf "Celkové tržby podle kategorií produktů"
const categoryRevenueData = {
  categories: ["Televize", "Tablety", "Mobilní telefony", "Audio"],
  revenues: [1205680, 623660, 614460, 416370]
};

// Data pro graf "Měsíční trendy tržeb podle kategorií produktů"
const monthlyTrendsData = {
  months: ["Únor", "Březen", "Duben", "Květen"],
  series: [
    {
      name: "Televize",
      data: [290920, 380900, 266930, 266930]
    },
    {
      name: "Mobilní telefony",
      data: [208690, 157710, 177510, 70550]
    },
    {
      name: "Tablety",
      data: [188890, 164910, 171910, 97950]
    },
    {
      name: "Audio",
      data: [130310, 107820, 107840, 70400]
    }
  ]
};

// Data pro graf "Podíl kategorií na tržbách podle měsíců"
const categoryShareData = {
  months: ["Únor", "Březen", "Duben", "Květen"],
  series: [
    {
      name: "Televize",
      data: [290920, 380900, 266930, 266930]
    },
    {
      name: "Mobilní telefony",
      data: [208690, 157710, 177510, 70550]
    },
    {
      name: "Tablety",
      data: [188890, 164910, 171910, 97950]
    },
    {
      name: "Audio",
      data: [130310, 107820, 107840, 70400]
    }
  ]
};

// Data pro graf "Počet objednávek podle dne v týdnu"
const ordersByDayData = {
  days: ["Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota", "Neděle"],
  counts: [13, 10, 11, 9, 12, 13, 10]
};

// Data pro graf "Kategorie nejčastěji nakupované společně s televizemi"
const categoriesWithTvData = {
  categories: ["Audio", "Mobilní telefony", "Tablety"],
  counts: [13, 12, 7]
};

// Data pro graf "Průměrné denní tržby před a po změně marketingového rozpočtu"
const marketingImpactData = {
  periods: ["Před změnou", "Po změně"],
  revenues: [28243.56, 66217.08]
};

// Data pro graf "Procentuální změna průměrných denních tržeb podle kategorií"
const categoryPercentChangeData = {
  categories: ["Televize", "Mobilní telefony", "Tablety", "Audio"],
  percentChanges: [-18.40, -23.18, -27.62, -27.76]
};

// Data pro graf "Denní tržby před a po změně marketingového rozpočtu"
const dailyRevenuesData = {
    beforeChange: [
        [Date.UTC(2022, 1, 1), 57980],
        [Date.UTC(2022, 1, 2), 29670],
        [Date.UTC(2022, 1, 3), 14980],
        [Date.UTC(2022, 1, 4), 25490],
        [Date.UTC(2022, 1, 5), 46480],
        [Date.UTC(2022, 1, 6), 5980],
        [Date.UTC(2022, 1, 7), 17990],
        [Date.UTC(2022, 1, 8), 29990],
        [Date.UTC(2022, 1, 9), 63980],
        [Date.UTC(2022, 1, 10), 20980],
        [Date.UTC(2022, 1, 11), 5690],
        [Date.UTC(2022, 1, 12), 52980],
        [Date.UTC(2022, 1, 13), 38990],
        [Date.UTC(2022, 1, 14), 14980],
        [Date.UTC(2022, 1, 15), 37480],
        [Date.UTC(2022, 1, 16), 23970],
        [Date.UTC(2022, 1, 17), 10490],
        [Date.UTC(2022, 1, 18), 5690],
        [Date.UTC(2022, 1, 19), 68470],
        [Date.UTC(2022, 1, 20), 24990],
        [Date.UTC(2022, 1, 21), 52480],
        [Date.UTC(2022, 1, 22), 25490],
        [Date.UTC(2022, 1, 23), 17970],
        [Date.UTC(2022, 1, 24), 23680],
        [Date.UTC(2022, 1, 25), 38990],
        [Date.UTC(2022, 1, 26), 14980],
        [Date.UTC(2022, 1, 27), 10490],
        [Date.UTC(2022, 1, 28), 37480],
        [Date.UTC(2022, 2, 1), 5980],
        [Date.UTC(2022, 2, 2), 52980],
        [Date.UTC(2022, 2, 3), 50680],
        [Date.UTC(2022, 2, 4), 7490],
        [Date.UTC(2022, 2, 5), 66970],
        [Date.UTC(2022, 2, 6), 10490],
        [Date.UTC(2022, 2, 7), 17990],
        [Date.UTC(2022, 2, 8), 10490],
        [Date.UTC(2022, 2, 9), 29990],
        [Date.UTC(2022, 2, 10), 44990],
        [Date.UTC(2022, 2, 11), 11990],
        [Date.UTC(2022, 2, 12), 13180],
        [Date.UTC(2022, 2, 13), 25490],
        [Date.UTC(2022, 2, 14), 38990],
        [Date.UTC(2022, 2, 15), 5980],
        [Date.UTC(2022, 2, 16), 17990],
        [Date.UTC(2022, 2, 17), 40480]
    ],
    afterChange: [
        [Date.UTC(2022, 2, 18), 50680],
        [Date.UTC(2022, 2, 19), 24990],
        [Date.UTC(2022, 2, 20), 14980],
        [Date.UTC(2022, 2, 21), 27990],
        [Date.UTC(2022, 2, 22), 41980],
        [Date.UTC(2022, 2, 23), 57980],
        [Date.UTC(2022, 2, 24), 109130],
        [Date.UTC(2022, 2, 30), 31460],
        [Date.UTC(2022, 3, 2), 68980],
        [Date.UTC(2022, 3, 4), 236240],
        [Date.UTC(2022, 3, 17), 57980],
        [Date.UTC(2022, 3, 18), 80470],
        [Date.UTC(2022, 3, 22), 32980],
        [Date.UTC(2022, 3, 23), 80640],
        [Date.UTC(2022, 3, 29), 166900],
        [Date.UTC(2022, 4, 7), 80150],
        [Date.UTC(2022, 4, 11), 28480],
        [Date.UTC(2022, 4, 14), 85470],
        [Date.UTC(2022, 4, 17), 17680],
        [Date.UTC(2022, 4, 18), 71970],
        [Date.UTC(2022, 4, 22), 23970],
        [Date.UTC(2022, 4, 24), 46170],
        [Date.UTC(2022, 4, 27), 69980],
        [Date.UTC(2022, 4, 29), 81960]
    ],
    changeDate: Date.UTC(2022, 2, 18) // March 18, 2022
};
