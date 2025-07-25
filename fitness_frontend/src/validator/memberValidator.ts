
export function validateMember(member) {
  if (!member.id || !member.name || !member.age || !member.password || !member.selectedCourse || !member.contact) {
    return 'Please fill in all fields';
  }

  const mId = Number(member.id);
  const age = Number(member.age);
  const contact = Number(member.contact)

  if (isNaN(mId)) {
    return 'Member ID must be a number';
  }
  if(/\d/.test(member.name)) {
    return 'Member name can not have numbers'
  }
  if (isNaN(age)) {
    return 'Age must be a number';
  }
  if (isNaN(contact)) {
    return 'Contact must be a number';
  }
  if (mId <= 0) {
    return 'Member ID must be positive numbers';
  }
  if(member.name.length < 3) {
    return 'Course name must be at least 3 characters long';
  }
  if (String(contact).length !== 10) {
    return 'Contact number must be at 10 digits';
  }
  return ''; 
}
