let obj = {
    str : [
        'fazztrack',
        'fazztrack',
        'fazztrack',
        [
            'fazztrack',
            [
                'fazztrack',
                'fazztrack',
                {
                    man : [
                        {
                            the : {
                                name : {
                                    of : {
                                        us : 'koda'
                                    }
                                }
                            }
                        }
                    ]
                }
            ]
        ]
    ]
}
console.log(obj.str[3][1][2].man[0].the.name.of.us)

console.log('hello world')

let my = [
    {
        favourite: [
            "fazztrack",
            "fazztrack",
            "fazztrack",
            {
                fruit : {
                    is : "apple"
                }
            }
        ]
            
        
    }
]
console.log(my[0].favourite[3].fruit.is)