function mac() {
  oldAddress=$(ifconfig en0 | grep ether | tr -d '\\t' | cut -d ' ' -f2)
  echo "Old MAC address is $oldAddress"
  # Keep first 3 octets of original MAC address to guarantee compatibility
  old=$(echo $oldAddress | cut -d ':' -f1-3)
  # Generate new octets
  new=$(openssl rand -hex 3 | sed 's/\\(..\\)/\\1:/g; s/.$//')
  newAddress="\${old}:\${new}"
  echo "Setting MAC address to \${newAddress}"
  sudo ifconfig en0 ether \${newAddress}
  if [ "$oldAddress" = "$newAddress" ]; then
    echo "Something went wrong, MAC address was not changed"
  else
    echo "Successfully updated MAC address"
  fi
}