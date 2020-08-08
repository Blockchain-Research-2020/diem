initSidebarItems({"enum":[["ScriptCall","Structured representation of a call into a known Move script. `ignore impl ScriptCall {     pub fn encode(self) -> Script { .. }     pub fn decode(&Script) -> Option<ScriptCall> { .. } } `"]],"fn":[["encode_add_currency_to_account_script","Add a `Currency` balance to `account`, which will enable `account` to send and receive `Libra<Currency>`. Aborts with NOT_A_CURRENCY if `Currency` is not an accepted currency type in the Libra system Aborts with `LibraAccount::ADD_EXISTING_CURRENCY` if the account already holds a balance in `Currency`."],["encode_add_recovery_rotation_capability_script","Add the `KeyRotationCapability` for `to_recover_account` to the `RecoveryAddress` resource under `recovery_address`."],["encode_add_validator_and_reconfigure_script","Add `new_validator` to the validator set. Fails if the `new_validator` address is already in the validator set or does not have a `ValidatorConfig` resource stored at the address. Emits a NewEpochEvent."],["encode_burn_script","Permanently destroy the `Token`s stored in the oldest burn request under the `Preburn` resource. This will only succeed if `account` has a `MintCapability<Token>`, a `Preburn<Token>` resource exists under `preburn_address`, and there is a pending burn request. sliding_nonce is a unique nonce for operation, see sliding_nonce.move for details"],["encode_burn_txn_fees_script","Burn transaction fees that have been collected in the given `currency` and relinquish to the association. The currency must be non-synthetic."],["encode_cancel_burn_script","Cancel the oldest burn request from `preburn_address` and return the funds. Fails if the sender does not have a published `BurnCapability<Token>`."],["encode_create_child_vasp_account_script","Create a `ChildVASP` account for sender `parent_vasp` at `child_address` with a balance of `child_initial_balance` in `CoinType` and an initial authentication_key `auth_key_prefix | child_address`. If `add_all_currencies` is true, the child address will have a zero balance in all available currencies in the system. This account will a child of the transaction sender, which must be a ParentVASP."],["encode_create_designated_dealer_script","Create an account with the DesignatedDealer role at `addr` with authentication key `auth_key_prefix` | `addr` and a 0 balance of type `Currency`. If `add_all_currencies` is true, 0 balances for all available currencies in the system will also be added. This can only be invoked by an account with the TreasuryCompliance role."],["encode_create_parent_vasp_account_script","Create an account with the ParentVASP role at `address` with authentication key `auth_key_prefix` | `new_account_address` and a 0 balance of type `currency`. If `add_all_currencies` is true, 0 balances for all available currencies in the system will also be added. This can only be invoked by an Association account. `sliding_nonce` is a unique nonce for operation, see sliding_nonce.move for details."],["encode_create_recovery_address_script","Extract the `KeyRotationCapability` for `recovery_account` and publish it in a `RecoveryAddress` resource under  `account`. ## Aborts * Aborts with `LibraAccount::EKEY_ROTATION_CAPABILITY_ALREADY_EXTRACTED` if `account` has already delegated its `KeyRotationCapability`. * Aborts with `RecoveryAddress::ENOT_A_VASP` if `account` is not a ParentVASP or ChildVASP"],["encode_create_testing_account_script","Create an account with the ParentVASP role at `address` with authentication key `auth_key_prefix` | `new_account_address` and a 0 balance of type `currency`. If `add_all_currencies` is true, 0 balances for all available currencies in the system will also be added. This can only be invoked by an Association account. The `human_name`, `base_url`, and compliance_public_key` fields of the ParentVASP are filled in with dummy information."],["encode_create_validator_account_script","Create a validator account at `new_validator_address` with `auth_key_prefix`and human_name."],["encode_create_validator_operator_account_script","Create a validator operator account at `new_validator_address` with `auth_key_prefix`and human_name."],["encode_freeze_account_script","Freeze account `address`. Initiator must be authorized. `sliding_nonce` is a unique nonce for operation, see sliding_nonce.move for details."],["encode_mint_lbr_script","Mint `amount_lbr` LBR from the sending account's constituent coins and deposits the resulting LBR into the sending account."],["encode_modify_publishing_option_script","Modify publishing options. Takes the LCS bytes of a `VMPublishingOption` object as input."],["encode_peer_to_peer_with_metadata_script","Transfer `amount` coins of type `Currency` from `payer` to `payee` with (optional) associated `metadata` and an (optional) `metadata_signature` on the message `metadata` | `Signer::address_of(payer)` | `amount` | `DualAttestation::DOMAIN_SEPARATOR`. The `metadata` and `metadata_signature` parameters are only required if `amount` >= `DualAttestation::get_cur_microlibra_limit` LBR and `payer` and `payee` are distinct VASPs. However, a transaction sender can opt in to dual attestation even when it is not required (e.g., a DesignatedDealer -> VASP payment) by providing a non-empty `metadata_signature`. Standardized `metadata` LCS format can be found in `libra_types::transaction::metadata::Metadata`."],["encode_preburn_script","Preburn `amount` `Token`s from `account`. This will only succeed if `account` already has a published `Preburn<Token>` resource."],["encode_publish_shared_ed25519_public_key_script","(1) Rotate the authentication key of the sender to `public_key` (2) Publish a resource containing a 32-byte ed25519 public key and the rotation capability     of the sender under the sender's address. Aborts if the sender already has a `SharedEd25519PublicKey` resource. Aborts if the length of `new_public_key` is not 32."],["encode_register_validator_config_script","Set validator's config locally. Does not emit NewEpochEvent, the config is NOT changed in the validator set."],["encode_remove_validator_and_reconfigure_script","Removes a validator from the validator set. Fails if the validator_address is not in the validator set. Emits a NewEpochEvent."],["encode_rotate_authentication_key_script","Rotate the sender's authentication key to `new_key`. `new_key` should be a 256 bit sha3 hash of an ed25519 public key. * Aborts with `LibraAccount::EKEY_ROTATION_CAPABILITY_ALREADY_EXTRACTED` if the `KeyRotationCapability` for `account` has already been extracted. * Aborts with `0` if the key rotation capability held by the account doesn't match the sender's address. * Aborts with `LibraAccount::EMALFORMED_AUTHENTICATION_KEY` if the length of `new_key` != 32."],["encode_rotate_authentication_key_with_nonce_admin_script","Rotate `account`'s authentication key to `new_key`. `new_key` should be a 256 bit sha3 hash of an ed25519 public key. This script also takes `sliding_nonce`, as a unique nonce for this operation. See sliding_nonce.move for details."],["encode_rotate_authentication_key_with_nonce_script","Rotate `account`'s authentication key to `new_key`. `new_key` should be a 256 bit sha3 hash of an ed25519 public key. This script also takes `sliding_nonce`, as a unique nonce for this operation. See sliding_nonce.move for details."],["encode_rotate_authentication_key_with_recovery_address_script","Rotate the authentication key of `account` to `new_key` using the `KeyRotationCapability` stored under `recovery_address`."],["encode_rotate_dual_attestation_info_script","Rotate `account`'s base URL to `new_url` and its compliance public key to `new_key`. Aborts if `account` is not a ParentVASP or DesignatedDealer Aborts if `new_key` is not a well-formed public key"],["encode_rotate_shared_ed25519_public_key_script","(1) Rotate the public key stored in `account`'s `SharedEd25519PublicKey` resource to `new_public_key` (2) Rotate the authentication key using the capability stored in `account`'s `SharedEd25519PublicKey` to a new value derived from `new_public_key` Aborts if `account` does not have a `SharedEd25519PublicKey` resource. Aborts if the length of `new_public_key` is not 32."],["encode_set_validator_config_and_reconfigure_script","Set validator's config and updates the config in the validator set. NewEpochEvent is emitted."],["encode_set_validator_operator_script","Set validator's operator"],["encode_tiered_mint_script","Mint 'mint_amount' to 'designated_dealer_address' for 'tier_index' tier. Max valid tier index is 3 since there are max 4 tiers per DD. Sender should be treasury compliance account and receiver authorized DD. `sliding_nonce` is a unique nonce for operation, see sliding_nonce.move for details."],["encode_unfreeze_account_script","Unfreeze account `address`. Initiator must be authorized. `sliding_nonce` is a unique nonce for operation, see sliding_nonce.move for details."],["encode_unmint_lbr_script","Unmints `amount_lbr` LBR from the sending account into the constituent coins and deposits the resulting coins into the sending account.\""],["encode_update_dual_attestation_limit_script","Update the dual attesation limit to `new_micro_lbr_limit`."],["encode_update_exchange_rate_script","Update the on-chain exchange rate to LBR for the given `currency` to be given by `new_exchange_rate_numerator/new_exchange_rate_denominator`."],["encode_update_libra_version_script","Update Libra version. `sliding_nonce` is a unique nonce for operation, see sliding_nonce.move for details."],["encode_update_minting_ability_script","Allows--true--or disallows--false--minting of `currency` based upon `allow_minting`."]]});