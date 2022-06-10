
const draftables = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://api.draftkings.com/draftgroups/v1/draftgroups/53773/draftables?format=json')
        .then(res => {
            console.log(res)
            resolve(res)
        }).catch(err) {
            reject(err)
        }
    })
}

// testing github vscode editing

export { draftables }