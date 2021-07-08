export const gcap = `
# ex. gcap "I love gcap"
function gcap {
  git add -A
  git commit -m "$@"
  git push
}
`;

export const bonus = `
alias gs="git status"
alias ga="git add"
alias gc="git commit"
alias gco="git checkout"
`