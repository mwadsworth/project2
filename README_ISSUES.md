# Project 2 - I Challenge You

## Issues

### Sequelize

- Problems referencing a composite (multi-column) primary key as a foreign key
- Difficulty using Views in sequelize
- Problems with ON DELETE CASCADE working
  - Message - "Cannot delete or update a parent row: a foreign key constraint fails"
  - https://stackoverflow.com/questions/23128816/sequelize-js-ondelete-cascade-is-not-deleting-records-sequelize
  - Fixed by adding FK constraint manually