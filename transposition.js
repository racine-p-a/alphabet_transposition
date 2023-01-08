/*
  This is the array containing all transpositions.
  - armenian alphabet
  - coptic alphabet
  - etruscan alphabet
  - greek alphabet
  - scandinavian alphabet
*/

const table_Translit = {
    'armen':{
        'd':'ժ',
        'h':'ի',
        'i':'լ',
        'î':'լ',
        'ï':'լ',
        'n':'դ',
        'o':'ծ',
        'ô':'ծ',
        'ö':'ծ',
        'p':'բ',
        'q':'գ',
        's':'ֆ',
        't':'է',
        'w':'ա',
        'D':'Ժ',
        'I':'Լ',
        'Î':'Լ',
        'Ï':'Լ',
        'M':'Պ',
        'P':'Բ',
        'Q':'Գ',
        'O':'Ծ',
        'Ô':'Ծ',
        'Ö':'Ծ',
        'S':'Ֆ',
        'U':'Ա',
        'Ù':'Ա',
        'Û':'Ա',
        'Ü':'Ա',
    },
    'copt':{
        'a':'ⲁ',
        "à":'ⲁ',
        "â":'ⲁ',
        "ä":'ⲁ',
        'b':'ⲃ',
        'd':'ⲇ',
        'e':'ⲉ',
        'é':'ⲉ',
        'è':'ⲉ',
        'ê':'ⲉ',
        'ë':'ⲉ',
        'f':'ⲋ',
        'h':'ⲏ',
        'i':'ⲓ',
        'î':'ⲓ',
        'ï':'ⲓ',
        'k':'ⲕ',
        'm':'ⲙ',
        'n':'ⲛ',
        'o':'ⲑ',
        'ô':'ⲑ',
        'ö':'ⲑ',
        'p':'ⳁ',
        'q':'ϥ',
        's':'ϩ',
        't':'ϯ',
        'w':'ϣ',
        'x':'ϫ',
        'y':'ⲯ',
        'ŷ':'ⲯ',
        'ÿ':'ⲯ',
        'z':'ⲝ',
        'A':'Ⲁ',
        "À":'Ⲁ',
        "Â":'Ⲁ',
        "Ä":'Ⲁ',
        'B':'Ⲃ',
        'D':'Ⲇ',
        'E':'Ⲉ',
        'É':'Ⲉ',
        'È':'Ⲉ',
        'Ê':'Ⲉ',
        'Ë':'Ⲉ',
        'F':'Ⲋ',
        'H':'Ⲏ',
        'I':'Ⲓ',
        'Î':'Ⲓ',
        'Ï':'Ⲓ',
        'K':'Ⲕ',
        'M':'Ⲙ',
        'N':'Ⲛ',
        'O':'Ⲑ',
        'Ô':'Ⲑ',
        'Ö':'Ⲑ',
        'P':'Ⳁ',
        'Q':'Ϥ',
        'S':'Ϩ',
        'T':'Ϯ',
        'W':'Ϣ',
        'X':'Ϫ',
        'Y':'Ⲯ',
        'Ŷ':'Ⲯ',
        'Ÿ':'Ⲯ',
        'Z':'Ⲝ',
    },
    'etrus':{
        'a':'𐌀',
        "à":'𐌀',
        "â":'𐌀',
        "ä":'𐌀',
        'b':'𐌁',
        'c':'𐌂',
        'ç':'𐌂',
        'd':'𐌃',
        'e':'𐌄',
        'é':'𐌄',
        'è':'𐌄',
        'ê':'𐌄',
        'ë':'𐌄',
        'f':'𐌅',
        'g':'g',
        'i':'𐌆',
        'î':'𐌆',
        'ï':'𐌆',
        'k':'𐌊',
        'l':'𐌋',
        'm':'𐌌',
        'n':'𐌍',
        'o':'𐌈',
        'ô':'𐌈',
        'ö':'𐌈',
        'p':'𐌛',
        'q':'𐌒',
        's':'𐌔',
        't':'𐌕',
        'u':'ц',
        'ù':'ц',
        'û':'ц',
        'ü':'ц',
        'x':'𐌗',
        'y':'𐌙',
        'ŷ':'𐌙',
        'ÿ':'𐌙',
        'A':'𐌀',
        "À":'𐌀',
        "Â":'𐌀',
        "Ä":'𐌀',
        'B':'𐌯',
        'C':'𐌂',
        'Ç':'𐌂',
        'D':'𐌃',
        'E':'𐌄',
        'É':'𐌄',
        'È':'𐌄',
        'Ê':'𐌄',
        'Ë':'𐌄',
        'F':'𐌅',
        'G':'G',
        'I':'𐌆',
        'Î':'𐌆',
        'Ï':'𐌆',
        'K':'𐌊',
        'L':'𐌋',
        'M':'𐌌',
        'N':'𐌍',
        'O':'𐌈',
        'Ô':'𐌈',
        'Ö':'𐌈',
        'P':'𐌛',
        'Q':'𐌒',
        'S':'𐌔',
        'T':'𐌕',
        'U':'ц',
        'Ù':'Ц',
        'Û':'Ц',
        'Ü':'Ц',
        'V':'Ч',
        'W':'Щ',
        'X':'𐌗',
        'Y':'𐌙',
        'Ŷ':'𐌙',
        'Ÿ':'𐌙',
    },
    'hellen':{
        'a':'α',
        "à":'α',
        "â":'α',
        "ä":'α',
        'b':'ϐ',
        'd':'δ',
        'e':'ε',
        'é':'ε',
        'è':'ε',
        'ê':'ε',
        'ë':'ε',
        'i':'ι',
        'î':'ι',
        'ï':'ι',
        'm':'m',
        'n':'η',
        'o':'θ',
        'ô':'θ',
        'ö':'θ',
        'p':'ρ',
        't':'τ',
        'u':'μ',
        'ù':'μ',
        'û':'μ',
        'ü':'μ',
        'w':'ω',
        'x':'χ',
        'y':'ψ',
        'ŷ':'ψ',
        'ÿ':'ψ',
        'z':'ζ',
        'A':'Д',
        "À":'Д',
        "Â":'Д',
        "Ä":'Д',
        'D':'Δ',
        'E':'Σ',
        'É':'Σ',
        'È':'Σ',
        'Ê':'Σ',
        'Ë':'Σ',
        'N':'И',
        'O':'Θ',
        'Ô':'Θ',
        'Ö':'Θ',
        'Y':'Ψ',
        'Ŷ':'Ψ',
        'Ÿ':'Ψ',
    },
    'nors':{
        'a':'å',
        "à":'å',
        "â":'å',
        "ä":'å',
        'A':'Å',
        "À":'Å',
        "Â":'Å',
        "Ä":'Å',
        'd':'ð',
        'D':'Ð',
        'i':'í',
        'I':'Í',
        'o':'ø',
        'ô':'ø',
        'ö':'ø',
        'O':'Ø',
        'Ô':'Ø',
        'Ö':'Ø',
        'p':'Þ',
        'P':'þ',
        'u':'ú',
        'ù':'ú',
        'û':'ú',
        'ü':'ú',
        'U':'Ú',
        'Ù':'Ú',
        'Û':'Ú',
        'Ü':'Ú',
        'y':'ý',
        'ŷ':'ý',
        'ÿ':'ý',
        'Y':'Ý',
        'Ŷ':'Ý',
        'Ÿ':'Ý',
    },
    'slav':{
        'a':'д',
        "à":'д',
        "â":'д',
        "ä":'д',
        'b':'б',
        'c':'с',
        'ç':'с',
        'd':'d',
        'e':'э',
        'é':'э',
        'è':'э',
        'ê':'э',
        'ë':'ё',
        'f':'ф',
        'g':'g',
        'h':'ю',
        'i':'i',
        'î':'i',
        'ï':'i',
        'j':'j',
        'k':'ж',
        'l':'л',
        'm':'m',
        'n':'и',
        'o':'ѳ',
        'ô':'ѳ',
        'ö':'ѳ',
        'p':'p',
        'q':'q',
        'r':'я',
        's':'ѯ',
        't':'т',
        'u':'ц',
        'ù':'ц',
        'û':'ц',
        'ü':'ц',
        'v':'ч',
        'w':'щ',
        'x':'ѫ',
        'y':'ч',
        'ŷ':'ч',
        'ÿ':'ч',
        'z':'z',
        'A':'Д',
        "À":'Д',
        "Â":'Д',
        "Ä":'Д',
        'B':'Б',
        'C':'C',
        'Ç':'C',
        'D':'D',
        'E':'З',
        'É':'З',
        'È':'З',
        'Ê':'З',
        'Ë':'Ё',
        'F':'Ф',
        'G':'G',
        'H':'Ю',
        'I':'I',
        'Î':'I',
        'Ï':'I',
        'J':'J',
        'K':'Ж',
        'L':'Л',
        'M':'M',
        'N':'И',
        'O':'Ѳ',
        'Ô':'Ѳ',
        'Ö':'Ѳ',
        'P':'P',
        'Q':'Q',
        'R':'Я',
        'S':'Ѯ',
        'T':'Т',
        'U':'ц',
        'Ù':'Ц',
        'Û':'Ц',
        'Ü':'Ц',
        'V':'Ч',
        'W':'Щ',
        'X':'Ѫ',
        'Y':'Ч',
        'Ŷ':'Ч',
        'Ÿ':'Ч',
        'Z':'Z',
    },
}
